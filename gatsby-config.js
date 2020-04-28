module.exports = {
  siteMetadata: {
    title: `Laura McCartney | Potter`,
    description: `London Based ceramic artist.`,
    author: `@lauramccartneyceramics`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "yth0o5v7",
        dataset: "production",
        watchMode: true
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'twv1ruz',
          families: ['nobel', 'mrs-eaves']
        }
      }
    },
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://lauramccartney.us20.list-manage.com/subscribe/post?u=808727f788695c507a499d0a7&amp;id=c3e23677a0',
        },
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: 'MmIwN2YxZGUtZjQ3Zi00MzA1LWFjODAtOGQ5Y2U2MjlmZThkNjM2OTM0Mjg4MjU5NTA1MDAw'
      }
    }
  ],
}
