
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProduct {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const products = result.data.allSanityProduct.edges || []
  products.forEach((edge, index) => {
    const slug = edge.node.slug.current;
    const path = `/shop/${slug}`
    createPage({
      path,
      component: require.resolve("./src/templates/product.js"),
      context: { slug : slug },
    })
  })
}
