import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import TopBar from './TopBar'
import MainMenu from './MainMenu'
import Footer from './Footer'
import favicon from '../img/iydl-logov.svg'

const TemplateWrapper = ({ siteUrl, slug, image, yoast, children }) => (

  <div>
    {yoast ?
    <Helmet defer={false} defaultTitle={yoast.yoast_wpseo_website_name} titleTemplate={`%s | ${yoast.yoast_wpseo_title}`}>
      {yoast.yoast_wpseo_title ? 
      <meta name="title" content={yoast.yoast_wpseo_title} /> :
      <meta name="title" content="In Your Defence" />}
      {yoast.yoast_wpseo_metadesc ?
      <meta name="description" content={yoast.yoast_wpseo_metadesc} /> :
      <meta name="description" content="Specialist Criminal Defence Solicitors and Lawyers, In Your Defence Ltd Offer Representation To People Accused Of Or Under Suspicion Of Criminal Offences." />}
      <html lang="en" />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta property="og:locale" content="en_GB" />
      {yoast.yoast_wpseo_title && <meta property="og:title" content={yoast.yoast_wpseo_title} />}
      <meta property="og:type" content="website" />
      {yoast.yoast_wpseo_metadesc && <meta property="og:description" content={yoast.yoast_wpseo_metadesc} />}
      <meta property="og:url" content={siteUrl + "/" + slug} />
      {yoast.yoast_wpseo_website_name && <meta property="og:site_name" content={yoast.yoast_wpseo_website_name} />}
      {image ? <meta property="og:image" content={image.localFile.childImageSharp.fluid.src} /> : <meta property="og:image" content={favicon} />}
      {image ? <meta property="og:image:width" content={image.localFile.childImageSharp.fluid.width} /> : <meta property="og:image:width" content="692" />}
      {image ? <meta property="og:image:height" content={image.localFile.childImageSharp.fluid.height} /> : <meta property="og:image:height" content="773" />}
      <meta name="twitter:card" content="summary_large_image" />
      {yoast.yoast_wpseo_twitter_description && <meta name="twitter:description" content={yoast.yoast_wpseo_twitter_description} />}
      {yoast.yoast_wpseo_twitter_title && <meta name="twitter:title" content={yoast.yoast_wpseo_twitter_title} />}
      <meta name="twitter:site" content="@InYourDefenceUK" />
      {yoast.yoast_wpseo_twitter_image && <meta name="twitter:image" content={yoast.yoast_wpseo_twitter_image} />}
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
