const fetch = require('node-fetch');

exports.handler = function(event, context, callback) {

  if(event.httpMethod !== 'GET' && event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 200,
      body: ''
    });
  }

  const url = 'https://app.snipcart.com/api/products';
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Basic ${Buffer.from(process.env.SNIPCART_PRIVATE_KEY).toString('base64')}`
  };

  fetch(url,
  {
    method:'POST',
    headers: headers,
    body: {
      fetchUrl: 'https://www.lauramccartney.co.uk/.netlify/functions/snipcart_crawler',
    }
  })
  .then((res) => res.json())
  .then((result) => {
    let jsonres = JSON.parse(result);
    console.log(jsonres);

    fetch(url ,
      {
        method:'GET',
        headers: headers
      })
      .then(res => res.json())
      .then(json => {
        let items = json.items;
        for (var i = 0; i < items.length; i++) {

          if(!items[i].hasOwnProperty('stock')) {

            fetch(`https://app.snipcart.com/api/products/${items[i].id}`,
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
      .catch(err => {console.log("GET Error: "+ err)})
  })
  .catch(err => {console.log("POST Error: "+ err)})
}
