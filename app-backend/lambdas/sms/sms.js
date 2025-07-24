// sms.js
const AWS = require('aws-sdk');

const sns = new AWS.SNS();
const { SNS_TOPIC_ARN } = process.env;

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return corsResponse(200, 'CORS OK');

  try {
    const { name, amount, phoneNumber, category, timestamp } = JSON.parse(event.body);

    if (!name || !amount || !phoneNumber || !category || !timestamp) {
      return corsResponse(400, { error: 'Missing fields for SMS' });
    }

    // Message to treasurer
    const treasurerMessage = `🛐 Giving Received\nName: ${name}\nCategory: ${category}\nAmount: KES ${amount}\nTime: ${timestamp}`;
    await sns.publish({
      TopicArn: SNS_TOPIC_ARN,
      Message: treasurerMessage,
    }).promise();

    // Message to giver
    await sns.publish({
      PhoneNumber: formatPhoneNumber(phoneNumber),
      Message: `🙏🏽 Thank you, ${name}, for giving KES ${amount} as ${category}. God bless you!`,
    }).promise();

    return corsResponse(200, { message: 'SMS sent successfully' });

  } catch (err) {
    console.error('SMS Error:', err);
    return corsResponse(500, { error: 'Failed to send SMS' });
  }
};

function formatPhoneNumber(phone) {
  return phone.startsWith('+') ? phone : phone.replace(/^0/, '+254');
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
