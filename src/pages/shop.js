import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { mapEdgesToNodes } from '../lib/helpers'

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

  const productNodes =
    data && data.products && mapEdgesToNodes(data.products)

  const [ products, setProducts ] = useState(productNodes)

  if (errors) {
    throw errors
  }



  useEffect(() => {
    fetch(`https://www.lauramccartney.co.uk/.netlify/functions/snipcart_get_stock`)
      .then(response => {
        if (response.status !== 200) {
          return;
        }
        return response.json()
      })
      .then(result => {
        const setStockLevel = (snipArray) => {
          for (var i = 0; i < snipArray.length; i++) {
            if (snipArray[i].stock <= 0) {
              const id = snipArray[i].id;
              productNodes.find(p => p.slug.current === id).soldOut = true;
            }
          }
          setProducts([...productNodes]);
        }
        setStockLevel(result)
      })
      .catch(function(err) {
        throw err
      }
    );
  }, [productNodes]);



  return (
    <Layout>
      <SEO title="Shop" />

      <section className="grid grid-3">
        {products.map((node, i) =>  (
          <Link key={i}
                className={styles.product}
                to={`/shop/${node.slug.current}`}
                style={node.soldOut === true ? {pointerEvents: "none"} : null}>
            <div className={styles.imgWrapper}>
              {(node.soldOut === true) &&
                <p className={styles.tag}>Sold</p>
              }
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
