import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/shop.module.css"

export const query = graphql`
  query ShopPageQuery {
    products: allSanityProduct {
      edges {
        node {
          title
          slug {
            current
          }
          price
          images {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`


const Shop = props => {
  const { data, errors } = props

  if (errors) {
    throw errors
  }

  return (
    <Layout>
      <SEO title="Shop" />

      <section className={styles.shopGrid}>
        {data.products.edges.map(({ node }) =>  (
          <Link className={styles.product} to={`/shop/${node.slug.current}`}>
            <div className={styles.imgWrapper}>
              <Img fluid={node.images[0].asset.fluid} />
            </div>
            <h3 className={styles.shopTitle}>{node.title}</h3>
            <p className={styles.shopPrice}>£{node.price}</p>
          </Link>
        ))}
      </section>

    </Layout>
  )
}

export default Shop
