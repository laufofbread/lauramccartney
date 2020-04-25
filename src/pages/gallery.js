import React from "react"
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/gallery.module.css"

export const query = graphql`
  query GalleryPageQuery {
    page: sanityGallerySingle {
      _rawParagraphOne
      _rawParagraphTwo
      _rawParagraphThree
      imageOne {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageTwo {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageThree {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageFour {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageFive {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageSix {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageSeven {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageEight {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageNine {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageTen {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageEleven {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageTwelve {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const Gallery = props => {
  const { data, errors } = props
  const page = data && data.page

  if (errors) {
    throw errors
  }

  return (
    <Layout>
      <SEO title="Gallery" />

      <section className={styles.grid}>

        <div className={`${styles.paragraphOne} ${styles.paragraph}`}>
          <BlockContent blocks={page._rawParagraphOne} />
        </div>

        <div className={`${styles.paragraphTwo} ${styles.paragraph}`}>
          <BlockContent blocks={page._rawParagraphTwo} />
        </div>

        <div className={`${styles.paragraphThree} ${styles.paragraph}`}>
          <BlockContent blocks={page._rawParagraphThree} />
        </div>


        <Img className={`${styles.imageOne} ${styles.image}`} fluid={page.imageOne.asset.fluid} />

        <Img className={`${styles.imageTwo} ${styles.image}`} fluid={page.imageTwo.asset.fluid} />

        <Img className={`${styles.imageThree} ${styles.image}`} fluid={page.imageThree.asset.fluid} />

        <Img className={`${styles.imageFour} ${styles.image}`} fluid={page.imageFour.asset.fluid} />

        <Img className={`${styles.imageFive} ${styles.image}`} fluid={page.imageFive.asset.fluid} />

        <Img className={`${styles.imageSix} ${styles.image}`} fluid={page.imageSix.asset.fluid} />

        <Img className={`${styles.imageSeven} ${styles.image}`} fluid={page.imageSeven.asset.fluid} />

        <Img className={`${styles.imageEight} ${styles.image}`} fluid={page.imageEight.asset.fluid} />

        <Img className={`${styles.imageNine} ${styles.image}`} fluid={page.imageNine.asset.fluid} />

        <Img className={`${styles.imageTen} ${styles.image}`} fluid={page.imageTen.asset.fluid} />

        <Img className={`${styles.imageEleven} ${styles.image}`} fluid={page.imageEleven.asset.fluid} />

        <Img className={`${styles.imageTwelve} ${styles.image}`} fluid={page.imageTwelve.asset.fluid} />

      </section>
    </Layout>
  )
}

export default Gallery
