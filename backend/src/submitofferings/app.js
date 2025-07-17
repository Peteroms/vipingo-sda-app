const AWS = require('aws-sdk');
const https = require('https');
const crypto = require('crypto');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const sns = new AWS.SNS();
const axios = require('axios'); // Ensure axios is included in package.json

// Load environment variables
const {
  DYNAMO_TABLE,
  SNS_TOPIC_ARN,
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  MPESA_SHORTCODE,
  MPESA_PASSKEY,
  MPESA_ENV
} = process.env;

// M-Pesa base URL
const BASE_URL = MPESA_ENV === 'production'
  ? 'https://api.safaricom.co.ke'
  : 'https://sandbox.safaricom.co.ke';

exports.handler = async (event) => {
    // Handle CORS preflight request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
            },
            body: JSON.stringify({message: 'CORS preflight successful'})
        };
    }
  try {
    const body = JSON.parse(event.body);
    const { payer, amount, phone } = body;

    if (!payer || !amount || !phone) {
      return response(400, { message: 'Missing required fields: payer, amount, or phone' });
    }

    // Step 1: Get M-Pesa access token
    const token = await getMpesaToken();

    // Step 2: Initiate STK Push
    const timestamp = getTimestamp();
    const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString('base64');

    const stkPayload = {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: formatPhone(phone),
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: formatPhone(phone),
      CallBackURL: "https://my-callback-handler.com/mpesa", // Optional for production
      AccountReference: payer,
      TransactionDesc: "Church Offering"
    };

    const stkRes = await axios.post(
      `${BASE_URL}/mpesa/stkpush/v1/processrequest`,
      stkPayload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const checkoutRequestID = stkRes.data.CheckoutRequestID;

    // Note: In production, wait for M-Pesa confirmation via callback
    // For now, assume success and continue

    // Step 3: Save to DynamoDB
    const offeringId = crypto.randomUUID();
    const offeringItem = {
      id: offeringId,
      payer,
      amount,
      phone,
      date: new Date().toISOString(),
      mpesa_id: checkoutRequestID
    };

    await dynamoDb.put({
      TableName: DYNAMO_TABLE,
      Item: offeringItem
    }).promise();

    // Step 4: Send SMS to treasurer
    const smsMessage = `New offering: ${payer} gave KES ${amount}.`;
    await sns.publish({
      Message: smsMessage,
      TopicArn: SNS_TOPIC_ARN
    }).promise();

    return response(200, {
      message: 'Offering submitted and M-Pesa STK Push sent.',
      reference: checkoutRequestID
    });

  } catch (err) {
    console.error("Error submitting offering:", err);
    return response(500, { message: 'Internal Server Error', error: err.message });
  }
};

// ------------------------
// 🔧 Helper Functions
// ------------------------

function getTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, '0');
  const day = `${now.getDate()}`.padStart(2, '0');
  const hour = `${now.getHours()}`.padStart(2, '0');
  const min = `${now.getMinutes()}`.padStart(2, '0');
  const sec = `${now.getSeconds()}`.padStart(2, '0');
  return `${year}${month}${day}${hour}${min}${sec}`;
}

function formatPhone(phone) {
  // Convert Kenyan local numbers to international format if needed
  return phone.startsWith('0') ? phone.replace(/^0/, '254') : phone;
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*', // For CORS
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
    },
    body: JSON.stringify(body)
  };
}

async function getMpesaToken() {
  const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');
  const res = await axios.get(`${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });
  return res.data.access_token;
}
