import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/project.module.css"

const ProjectPage = ({ data, pageContext, location }) => {
  const project = data.sanityProject

  return (
    <Layout>
      <SEO title={project.title} />
      <div>


        <section>



        </section>
      </div>
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
