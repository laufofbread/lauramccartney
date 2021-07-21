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
              let sold = productNodes.find(p => p.slug.current === id);
              if (sold) {
                sold.soldOut = true
              }
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
                className="grid-item"
                to={`/shop/${node.slug.current}`}
                style={node.soldOut === true ? {pointerEvents: "none"} : null}>
            <div className="img-wrapper">
              {(node.soldOut === true) &&
                <p className={styles.tag}>Sold</p>
              }
              <Img fluid={node.images[0].asset.fluid} />
            </div>
            <h3 className="grid-item-title">{node.title}</h3>
            <p className="grid-item-secondary">£{node.price}</p>
          </Link>
        ))}
      </section>

    </Layout>
  )
}

export default Shop
