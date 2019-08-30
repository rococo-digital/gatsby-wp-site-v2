import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import MainMenu from './MainMenu'
import Footer from './Footer'


const TemplateWrapper = ({ yoast, children }) => (

  <div>
    {yoast ?
    <Helmet defer={false} defaultTitle={yoast.yoast_wpseo_title}>
      <html lang="en" />
      {/* <link rel="canonical" href={yoast.yoast_wpseo_canonical} /> */}
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      {/* <meta property="og:url" content={siteUrl} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={yoast.yoast_wpseo_title} />
      {/* <meta property="og:image" content={`${siteUrl}${gatsbyIcon}`} /> */}
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
    </Helmet> :
    <Helmet title="In Your Defence"/>}
    <MainMenu />

    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
