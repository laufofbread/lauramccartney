import React, { useEffect } from "react"
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
          stock
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

  const setStockLevel = (products) => {
    // console.log(products);
  }

  useEffect(() => {
      fetch(`/.netlify/functions/snipcart_set_stock`, {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(response => {
        console.log("response = "+response);
        if (response.status !== 200) {
          return;
        }

        return response.json()
      })
      .then(result => {
        console.log("response = "+result);
        setStockLevel(result)
      })
      .catch(function(err) {
        console.log("err = "+err);
      }
    );
  })


  return (
    <Layout>
      <SEO title="Shop" />

      <section className={styles.shopGrid}>
        {data.products.edges.map(({ node }, i) =>  (
          <Link key={i} className={styles.product} to={`/shop/${node.slug.current}`}>
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
