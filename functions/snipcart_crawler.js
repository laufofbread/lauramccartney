const sanityClient = require('@sanity/client');
const sanity = sanityClient({
  projectId: 'yth0o5v7',
  dataset: 'production',
  useCdn: false
});

const query = `*[_type == "product"] {
  slug,
  title,
  "imageUrl": images[0].asset->url,
  price,
  description
}`;

exports.handler = function(event, context, callback) {

  // snipcart send a GET request when crawling products
  if(event.httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 200,
      body: ''
    });
  }

  // list products the same way we do on the website
  sanity.fetch(query)
  .then((products) => {
      var products = products.map((product) => {
      	return {
      		id: product.slug.current,
          name: product.title,
      		price: product.price,
          url: 'https://www.lauramccartney.co.uk/.netlify/functions/snipcart_crawler',
          image: product.imageUrl
      	};
      });

      callback(null, {
      	statusCode: 200,
      	headers: {
      		"Content-Type": "application/json"
      	},
      	body: JSON.stringify(products),
      });
    });
}
