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
        "Content-Type": "application/json"
      },
      auth:{
        "user": process.env.SNIPCART_PRIVATE_KEY
      }
    }).then((data) => {
      console.log(process.env.SNIPCART_PRIVATE_KEY);

      return callback(null, {
      	statusCode: 200,
      	headers: {
      		"Content-Type": "application/json"
      	},
      	body: JSON.stringify(data),
      });
    });
}
