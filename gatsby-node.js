
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productResult = await graphql(`
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
  const projectResult = await graphql(`
    {
      allSanityProject {
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
  if (productResult.errors) {
    throw productResult.errors
  }
  if (projectResult.errors) {
    throw projectResult.errors
  }
  const products = productResult.data.allSanityProduct.edges || []
  products.forEach((edge, index) => {
    const slug = edge.node.slug.current;
    const path = `/shop/${slug}`
    createPage({
      path,
      component: require.resolve("./src/templates/product.js"),
      context: { slug : slug },
    })
  })
  const projects = projectResult.data.allSanityProject.edges || []
  projects.forEach((edge, index) => {
    const slug = edge.node.slug.current;
    const path = `/projects/${slug}`
    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { slug : slug },
    })
  })
}
