const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
    siteUrl: `https://iyd-stage.netlify.com`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'iyd.arunwebnerd.co.uk',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        
          
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-image`,
      options: {
        loadPolyfills: true
      }
    },
    {
      resolve: `gatsby-background-image-es5`,
      options: {
        loadPolyfills: true
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
