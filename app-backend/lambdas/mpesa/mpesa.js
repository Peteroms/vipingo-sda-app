// mpesa.js
const axios = require('axios');
const moment = require('moment');

const {
  MPESA_SHORTCODE,
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  MPESA_PASSKEY,
  MPESA_CALLBACK_URL,
} = process.env;

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return corsResponse(200, 'CORS OK');

  try {
    const { phoneNumber, amount, transactionId } = JSON.parse(event.body);

    const token = await getMpesaToken();
    const timestamp = moment().format('YYYYMMDDHHmmss');
    const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString('base64');

    const payload = {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber.replace(/^0/, '254'),
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: phoneNumber.replace(/^0/, '254'),
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: transactionId,
      TransactionDesc: 'Church Giving',
    };

    await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return corsResponse(200, { message: 'STK push initiated' });

  } catch (err) {
    console.error('M-Pesa Error:', err);
    return corsResponse(500, { error: 'Failed to initiate STK push' });
  }
};

async function getMpesaToken() {
  const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');

  const response = await axios.get(
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  return response.data.access_token;
}

function corsResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST',
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  };
}
