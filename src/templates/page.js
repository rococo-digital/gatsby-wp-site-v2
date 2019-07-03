import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Hero } from '../components/Hero'
import { HeroBottom } from '../components/HeroBottom'

import BackgroundImage from 'gatsby-background-image-es5'
import Tiles from 'bulma/bulma.sass'
import Layout from '../components/Layout'
import TwoColumns from '../components/TwoColumns';

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
  bottomHeroImage,
  bottomHeroText,
  intro,
  subtitle,
  hero_title,
  children,
  top_left_box_text,
  top_right_box_text,
  bottom_left_box_text,
  bottom_right_box_text,
  boxBackgroundImage,

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

      <TwoColumns text1={top_left_box_text} text2={top_right_box_text} text3={bottom_left_box_text} text4={bottom_right_box_text} image1={boxBackgroundImage} />


      <HeroBottom featuredImage={bottomHeroImage} text={bottomHeroText} />

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
        bottomHeroText={page.acf.bottom_hero_text}
        bottomHeroImage={page.acf.bottom_hero_image}
        intro={page.acf.intro_paragraph}
        subtitle={page.acf.hero_subtitle}
        hero_title={page.acf.hero_title}
        children={page.children}

        top_left_box_text={page.acf.text_top_left}
        top_right_box_text={page.acf.text_top_right}
        bottom_left_box_text={page.acf.text_bottom_left}
        bottom_right_box_text={page.acf.text_bottom_right}
        boxBackgroundImage={page.acf.background_image}
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
        text_top_left
        text_top_right
        background_image{
          localFile {
            childImageSharp {
              fluid(quality: 80, maxWidth: 2160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        
        text_bottom_left
        text_bottom_right
        
        bottom_hero_text
        bottom_hero_image{
          localFile {
            childImageSharp {
              fluid(quality: 80, maxWidth: 2160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
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
