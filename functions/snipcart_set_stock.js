const fetch = require('node-fetch');

exports.handler = function(event, context, callback) {

  if(event.httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 200,
      body: ''
    });
  }

  fetch('https://app.snipcart.com/api/products',
    {
      method:'GET',
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Basic ${Buffer.from(process.env.SNIPCART_PRIVATE_KEY).toString('base64')}`
      }
    })
    .then(res => res.json())
    .then(json => {console.log(json); return json});
}
