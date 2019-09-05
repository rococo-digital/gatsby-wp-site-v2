require('dotenv').config();
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'In Your Defence | Criminal Lawyers',
    siteUrl: `https://iydl.co.uk`,
    description: `Criminal defence lawyers`,
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
        auth: {
          htaccess_user: process.env.WP_USERNAME,
          htaccess_pass: process.env.WP_PASSWORD,
          htaccess_sendImmediately: false
        },
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `iyd.arunwebnerd.co.uk`,
              protocol: `https`,
              // defaults
              maxWidth: 650,
              wrapperStyle: ``,
              postTypes: ["page"],
              backgroundColor: `white`,
              withWebp: true, // enable WebP files generation
            }
          }
        ]
          
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
    },
    {
      resolve: `gatsby-background-image-es5`,
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-htaccess',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
        whitelist: ['tile', 'anchor-list', 'h1', 'h2', 'h3', 'h4', 'h5', 'call-to-action', 'quote'],
        whitelistPatterns: [/^btn/, /^column/, /^has-background/, /^is-one/, /^font/, /^content/, /^call-to-action/, /^section/, /^is-/]
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-131811618-8`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://iydl.co.uk',
        sitemap: 'https://iydl.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
