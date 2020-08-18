import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageBuilder from "../components/page-builder"

import styles from "../styles/project.module.css"

const ProjectPage = ({ data, pageContext, location }) => {
  const project = data.sanityProject

  return (
    <Layout>
      <SEO title={project.title} />
      <section>

        <PageBuilder pageBuilder={project.pageBuilder} _rawPageBuilder={project._rawPageBuilder} />

      </section>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectQuery($slug: String!) {
    sanityProject(slug : { current : { eq: $slug }}) {
      title
      slug {
        current
      }
      ...PageBuilderFragment
    }
  }
`
