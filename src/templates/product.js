import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductGallery from "../components/product-gallery.js"
import BuyButton from "../components/buy-button.js"

import styles from "../styles/product.module.css"

const ProductPage = ({ data, pageContext, location }) => {
  const product = data.sanityProduct

  return (
    <Layout>
      <SEO title={product.title} />
      <Link to="/shop" className={styles.backLink}> Back to shop</Link>
      <div className={styles.productWrapper}>
        <ProductGallery images={product.images} />

        <section className={styles.productInfo}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>£{product.price}</p>
          <p className={styles.description}>{product.description}</p>
          
          <p className={styles.secondaryInfo}>UK delivery is included in the price. For international shipping please contact me directly at <a href="mailto:hello@lauramccartney.co.uk">hello@lauramccartney.co.uk</a></p>
          <p className={styles.secondaryInfo}>
            Height { product.height }cm<br />
            Width { product.width }cm
          </p>

          <BuyButton product={product} />

          <details className={styles.tandc}>
            <summary>Terms &amp; Conditions</summary>
            <p>Packages go out 1-5 business days from day of purchase.</p>
            <p>International buyer is responsible for duties, fees, or taxes incurred upon receipt.</p>
            <p>If an item reaches you in a damaged condition, I will gladly replace it with a similar item of equal value.</p>
            <p>I do not exchange merchandise that reaches you in good condition.
              I do my best to accurately depict and describe the items in my shop and I ask that you keep in mind that
              all items are made by hand and by nature have slight imperfections and variations.</p>
            <p>If you are not satisfied with your purchase, you are welcome to return it for a full refund within 7 days of purchase. Buyers are responsible for the cost of return shipping.</p>
            <p>Please let me know if you have any questions. <a href="mailto:hello@lauramccartney.co.uk">hello@lauramccartney.co.uk</a></p>
          </details>

        </section>
      </div>
    </Layout>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query ProductQuery($slug: String!) {
    sanityProduct(slug : { current : { eq: $slug }}) {
      title
      slug {
        current
      }
      description
      price
      weight
      height
      width
      images {
        asset {
          fluid(maxWidth: 900) {
            ...GatsbySanityImageFluid
          }
          url
        }
      }
    }

  }
`
