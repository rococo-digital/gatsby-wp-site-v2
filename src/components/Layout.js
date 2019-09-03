import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import TopBar from './TopBar'
import MainMenu from './MainMenu'
import Footer from './Footer'
import favicon from '../img/iydl-logov.svg'

const TemplateWrapper = ({ siteUrl, yoast, children }) => (

  <div>
    {yoast ?
    <Helmet defer={false} defaultTitle={yoast.yoast_wpseo_title} titleTemplate={`%s | ${yoast.yoast_wpseo_title}`}>
      <html lang="en" />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={yoast.yoast_wpseo_metadesc} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={yoast.yoast_wpseo_website_name} />
      <meta property="og:image" content={favicon} />
      <meta property="og:image:width" content="64" />
      <meta property="og:image:height" content="64" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={yoast.yoast_wpseo_twitter_description} />
      <meta name="twitter:title" content={yoast.yoast_wpseo_twitter_title} />
      <meta name="twitter:site" content="@InYourDefenceUK" />
      <meta name="twitter:image" content={favicon} />
      <meta name="twitter:creator" content="@InYourDefenceUK" />


    </Helmet> :
    <Helmet title="In Your Defence"/>}
    <TopBar />
    <MainMenu />

    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
