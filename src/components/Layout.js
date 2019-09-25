import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import TopBar from './TopBar'
import MainMenu from './MainMenu'
import Footer from './Footer'
import favicon from '../img/favicon.png'
import appleTouchIcon from '../img/iydl-apple-icon.png'

const schemaOrgWebPage = {
  "@context": "http://schema.org",
     "@type": "LegalService",
     "name": "In Your Defence Limited",
     "description": "Criminal Defence Solicitors based in Crawley, West Sussex. Providing expert legal representation nationwide.",
     "url": "https://iydl.co.uk/",
     "image": "http://iydl.co.uk/static/iydl_logo-d22c35315967807cda4018b20cfc36cb.svg",
     "priceRange": "£000 - £000",
     "telephone": "+44 1293 550400",
     "email": "support@iydl.co.uk",
     "hasMap": "https://www.google.co.uk/maps/uv?hl=en&pb=!1s0x4875edc25b0d0195%3A0x5d012fb205379c80!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4s%2Fmaps%2Fplace%2Fin%2Byour%2Bdefence%2Blimited%2F%4050.9883139%2C-0.2054967%2C3a%2C75y%2C344.48h%2C90t%2Fdata%3D*213m4*211e1*213m2*211ssS_QTh49cfz0eamWCyvYtA*212e0*214m2*213m1*211s0x4875edc25b0d0195%3A0x5d012fb205379c80%3Fsa%3DX!5sin%20your%20defence%20limited%20-%20Google%20Search!15sCAQ&imagekey=!1e2!2ssS_QTh49cfz0eamWCyvYtA&sa=X&ved=2ahUKEwiPzc7KzsrkAhXoRxUIHf7oBNMQpx8wCnoECA8QCw",
     "address": {
       "@type": "PostalAddress",
       "addressLocality": "Bolney",
       "addressRegion": "West sussex",
       "postalCode": "RH17 5QT",
       "streetAddress": "Bolney Place, Cowfold Road"
     },
     "geo": {
       "@type": "GeoCoordinates",
       "latitude": "50.988943",
       "longitude": "-0.205844"
     },
     "sameAs": [
       "https://www.facebook.com/inyourdefence",
       "https://twitter.com/InYourDefenceUK"
     ]
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
      <link rel="apple-touch-icon" href={appleTouchIcon} />
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
