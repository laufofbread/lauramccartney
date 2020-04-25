const fetch = require('node-fetch');

exports.handler = function(event, context, callback) {

  console.log(event);
  console.log(context);

  if(event.httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 200,
      body: ''
    });
  }

  const data = fetch('https://app.snipcart.com/api/products',
    {
      method:'GET',
      headers:{
        "Content-Type": "application/json"
      },
      auth:{
        "user": process.env.SNIPCART_PRIVATE_KEY
      },
      body: JSON.stringify(res)
    });

    console.log(data);

    return data
}
