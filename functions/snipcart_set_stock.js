const fetch = require('node-fetch');

exports.handler = function(event, context, callback) {

  if(event.httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 200,
      body: ''
    });
  }

  const response = fetch('https://app.snipcart.com/api/products',
    {
      method:'GET',
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Basic ${process.env.SNIPCART_PRIVATE_KEY}`
      }
    });

    return response;
}
