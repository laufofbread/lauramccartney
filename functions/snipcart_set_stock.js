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
    .then(json => {
      var stock = json.items.map((product) => {
      	return {
      		id: product.userDefinedId,
          stock: product.stock
      	};
      });

      callback(null, {
      	statusCode: 200,
      	headers: {
          "Access-Control-Allow-Origin" : "*",
          'Content-Type': 'application/json'
      	},
      	body: JSON.stringify(stock)
      });
    });
}
