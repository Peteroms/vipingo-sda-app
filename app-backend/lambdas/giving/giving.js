// giving.js
const AWS = require('aws-sdk');

const { DYNAMO_TABLE } = process.env;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return corsResponse(200, 'CORS OK');

  try {
    const data = JSON.parse(event.body);
    const { name, amount, phoneNumber, category } = data;

    if (!name || !amount || !phoneNumber || !category) {
      return corsResponse(400, { error: 'Missing required fields' });
    }

    const timestamp = new Date().toISOString();
    const transactionId = `TXN-${Date.now()}`;

    await dynamoDb.put({
      TableName: DYNAMO_TABLE,
      Item: {
        TransactionID: transactionId,
        Name: name,
        Amount: amount,
        PhoneNumber: phoneNumber,
        Category: category,
        Timestamp: timestamp,
      },
    }).promise();

    return corsResponse(200, {
      message: 'Transaction recorded.',
      transactionId,
    });

  } catch (err) {
    console.error('Error saving giving:', err);
    return corsResponse(500, { error: 'Internal server error' });
  }
};

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
