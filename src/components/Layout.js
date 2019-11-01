import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import TopBar from './TopBar'
import MainMenu from './MainMenu'
import Footer from './Footer'
import favicon from '../img/favicon.png'

const schemaOrgWebPage = {
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "home",
    "item": "https://iydl.co.uk/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "sexual offences",
    "item": "https://iydl.co.uk/sexual-offences/"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "sexual assault",
    "item": "https://iydl.co.uk/sexual-offences/sexual-assault/"  
  }]
}

const TemplateWrapper = ({ siteUrl, slug, path, image, yoast, children }) => (

  <div>
    {yoast ?
    <Helmet defer={false} defaultTitle={yoast.yoast_wpseo_title} titleTemplate={`%s | ${yoast.yoast_wpseo_title}`}>
      {yoast.yoast_wpseo_title ? 
      <meta name="title" content={yoast.yoast_wpseo_title} /> :
      <meta name="title" content="In Your Defence - Criminal Defence Solicitors" />}
      {yoast.yoast_wpseo_metadesc ?
      <meta name="description" content={yoast.yoast_wpseo_metadesc} /> :
      <meta name="description" content="Specialist Criminal Defence Solicitors and Lawyers, In Your Defence Ltd Offer Representation To People Accused Of Or Under Suspicion Of Criminal Offences." />}
      <link rel="canonical" href={siteUrl + path} />
      <link rel="icon" type="image/png" href={favicon} />
      <link rel="apple-touch-icon" sizes="180x180" href={siteUrl + '/iydl-apple-icon.png'} />
      <html lang="en" />
      <meta name="docsearch:version" content="2.0" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
      <meta property="og:locale" content="en_GB" />
      {yoast.yoast_wpseo_facebook_title ? <meta property="og:title" content={yoast.yoast_wpseo_facebook_title} /> : <meta property="og:title" content={yoast.yoast_wpseo_title} />}
      {yoast.yoast_wpseo_facebook_type ? <meta property="og:type" content={yoast.yoast_wpseo_facebook_type} /> : <meta property="og:type" content="website" />}
      {yoast.yoast_wpseo_facebook_description ? <meta property="og:description" content={yoast.yoast_wpseo_facebook_description} /> : <meta property="og:description" content={yoast.yoast_wpseo_metadesc} />}
      <meta property="og:url" content={siteUrl + path} />
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
      {slug == "home" && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}

    </Helmet> :
    <Helmet title="In Your Defence"/>}
    <TopBar />
    <MainMenu path={path}/>

    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
