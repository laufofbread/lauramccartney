import { graphql } from 'gatsby'


export const altFragment = graphql`
  fragment AltImageFragment on SanityAltImage {
    _key
    _type
    alt
    image {
      asset {
        fluid(maxWidth: 800) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`

export const pbFragment = graphql`
  fragment PageBuilderFragment on SanityProject {
    _rawPageBuilder(resolveReferences: { maxDepth: 10 })
    pageBuilder {
      ... on SanityLargeImage {
        _key
        _type
        altImage {
          ...AltImageFragment
        }
      }
      ... on SanityTwoImageRow {
        _key
        _type
        imageOne {
          ...AltImageFragment
        }
        imageTwo {
          ...AltImageFragment
        }
      }
      ... on SanityTextContent {
        _key
        _type
      }
    }
  }
`
