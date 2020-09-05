import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageBuilder from "../components/page-builder"

const ProjectPage = ({ data, pageContext, location }) => {
  const project = data.sanityProject

  return (
    <Layout>
      <SEO title={project.title} />
        <section className="content-wrapper xsm-container">
            <h1 className="title"><span>{project.title}</span></h1>
        </section>
        <PageBuilder pageBuilder={project.pageBuilder} _rawPageBuilder={project._rawPageBuilder} />
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
