import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { mapEdgesToNodes } from '../lib/helpers'

import styles from "../styles/project.module.css"

export const query = graphql`
  query ProjectPageQuery {
    projects: allSanityProject {
      edges {
        node {
          title
          altImage {
            ...AltImageFragment
          }
          slug {
            current
          }
        }
      }
    }
  }
`


const Projects = props => {
  const { data, errors } = props

  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects)


  if (errors) {
    throw errors
  }

  return (
    <Layout>
      <SEO title="Projects" />

      <section className="grid">
        {projectNodes.map((node, i) =>  (
          <Link key={i}
                className={styles.project}
                to={`/project/${node.slug.current}`}>

                <div className={styles.imgWrapper}>
                  <Img fluid={node.altImage.image.asset.fluid} />
                </div>
            <h3 className={styles.shopTitle}>{node.title}</h3>
          </Link>
        ))}
      </section>

    </Layout>
  )
}

export default Projects
