import React from "react"
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/home.module.css"

export const query = graphql`
  query IndexPageQuery {
    page: sanityHome {
      image {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawText
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props
  const page = data && data.page

  if (errors) {
    throw errors
  }

  return (
    <div className="homepage">
      <Layout>
        <BackgroundImage
              Tag="section"
              fluid={page.image.asset.fluid}
              style={{
                backgroundSize: 'cover',
                position: 'absolute'
              }}
            >
            <div className={styles.headline}>
              <BlockContent blocks={page._rawText} />
            </div>
        </BackgroundImage>
        <SEO title="Home" />
      </Layout>
    </div>
  )
}



export default IndexPage
