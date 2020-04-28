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
      let items = json.items;
      for (var i = 0; i < items.length; i++) {

        if(!items[i].hasOwnProperty('stock')) {

          fetch(`https://app.snipcart.com/api/${items[i].id}`,
            {
              method:'PUT',
              headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Basic ${Buffer.from(process.env.SNIPCART_PRIVATE_KEY).toString('base64')}`
              },
              body: JSON.stringify({
                'inventoryManagementMethod': 'Single',
                'stock': 1,
                'allowOutOfStockPurchases': false
              })
          })
          .then(res => { console.log(res) })
          .catch(err => { console.log("PUT Error: "+ err) });

        }
      }
    })
    .catch(err => {console.log("Error: "+ err)})
}
