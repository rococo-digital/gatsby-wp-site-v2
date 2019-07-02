import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Hero } from '../components/Hero'
import { HeroBottom } from '../components/HeroBottom'

import BackgroundImage from 'gatsby-background-image-es5'
import Tiles from 'bulma/bulma.sass'
import Layout from '../components/Layout'

const Img = ({ objFit = `cover`, objPosition = `50% 50%`, ...props }) => (
  <BackgroundImage
    {...props}
    imgStyle={{
      ...props.imgStyle,
      objectFit: objFit,
      objectPosition: objPosition,
      fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`,
    }}
  />
)



export const PageTemplate = ({
  title,
  content,
  featuredImage,
  intro,
  subtitle,
  hero_title,
  children,
}) => {
  
  return (
    <main>

      <Hero featuredImage={featuredImage} title={hero_title ? hero_title : title} subtitle={subtitle} />

      <section id="intro" className={intro ? "section has-background-grey" : "section-small has-background-grey"}>
            <div className="container content has-text-white-ter">
              {intro}
            </div>
      </section>

      <section id="subnav">
            {children ? children.map(
              item => (<div id={item.id}></div>)) : ""}
      </section>

      <div
        className="is-fullwidth"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <HeroBottom featuredImage={featuredImage} title={hero_title ? hero_title : title} subtitle={subtitle} />

    </main>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <PageTemplate
        title={page.title}
        content={page.content}
        featuredImage={page.featured_media}
        intro={page.acf.intro_paragraph}
        subtitle={page.acf.hero_subtitle}
        hero_title={page.acf.hero_title}
        children={page.children}
        
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      children {
        id
      }
      acf {
        hero_subtitle
        hero_title
        intro_paragraph
        
        
      }

      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
