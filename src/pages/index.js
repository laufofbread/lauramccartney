import React from "react"
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query IndexPageQuery {
    page: sanityHome {
      id
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

  return (
    <Layout>
      <BackgroundImage
            Tag="section"
            fluid={page.image.asset.fluid}
            backgroundColor={`#040e18`}
          >
            <BlockContent blocks={page._rawText} />
      </BackgroundImage>
      <SEO title="Home" />
    </Layout>
  )
}



export default IndexPage
