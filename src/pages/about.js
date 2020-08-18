import React from "react"
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import styles from "../styles/about.module.css"


export const query = graphql`
  query AboutPageQuery {
    page: sanityAbout {
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawText
    }
  }
`

const AboutPage = props => {
  const { data, errors } = props
  const page = data && data.page

  if (errors) {
    throw errors
  }

  return (
      <Layout>
        <SEO title="About" />
        <section className="sm-container">
          <Img fluid={page.image.asset.fluid} />
        </section>
        <section className="xsm-container">
          <BlockContent className={styles.text} blocks={page._rawText} />
        </section>
      </Layout>
  )
}



export default AboutPage
