exports.handler = function(event, context, callback) {

  if(event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 200,
      body: ''
    });
  }

  fetch('https://app.snipcart.com/api/products',
    {
      method:'GET',
      headers:{
        "Content-Type": "application/json",
        "user": process.env.SNIPCART_PRIVATE_KEY
      },
      body: JSON.stringify(data)
    }).then((data) => {
      console.log(event);
      console.log(context);

      callback(null, {
      	statusCode: 200,
      	headers: {
      		"Content-Type": "application/json"
      	},
      	body: JSON.stringify(data),
      });

    })
}
