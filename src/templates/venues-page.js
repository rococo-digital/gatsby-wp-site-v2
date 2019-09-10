import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Hero } from '../components/Hero'
import { HeroBottom } from '../components/HeroBottom'
import TwoColumns from '../components/TwoColumns'
import VenueMap from '../components/VenueMap'

export const VenuesPageTemplate = ({
  title,
  content,
  featuredImage,
  bottomHeroImage,
  bottomHeroText,
  intro,
  intro_title,
  subtitle,
  hero_title,
  children,
  top_left_box_text,
  top_right_box_text,
  bottom_left_box_text,
  bottom_right_box_text,
  top_left_box_text_title,
  top_right_box_text_title,
  bottom_left_box_text_title,
  bottom_right_box_text_title,
  boxBackgroundImage,
  boxBackgroundImage2,
}) => {
  return (
    <main>
      <Hero
        featuredImage={featuredImage}
        title={hero_title ? hero_title : title}
        subtitle={subtitle}
      />

<section id="intro" className={intro ? "section has-background-grey" : "section-small has-background-grey"}>
            <div className="container content has-text-white-ter">
                <article>
                {intro_title ? 
                <h1 className="title has-text-white-ter">
                  {intro_title}
                </h1>
                : ""}
                {intro ? 
                <h2 className="subtitle has-text-white-ter is-size-5 has-text-weight-normal">{intro}</h2>
                : "" }
              </article>
              
            </div>
      </section>

      <section id="subnav">
        {children ? children.map(item => <div id={item.id} />) : ''}
      </section>

      <VenueMap />

      <div
        className="is-fullwidth"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <TwoColumns
        text1={top_left_box_text}
        text2={top_right_box_text}
        text3={bottom_left_box_text}
        text4={bottom_right_box_text}
        title1={top_left_box_text_title}
        title2={top_right_box_text_title}
        title3={bottom_left_box_text_title}
        title4={bottom_right_box_text_title}
        image1={boxBackgroundImage}
        image2={boxBackgroundImage2}
      />

      <HeroBottom featuredImage={bottomHeroImage} text={bottomHeroText} />
    </main>
  )
}

VenuesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <VenuesPageTemplate
        title={page.title}
        content={page.content}
        featuredImage={page.featured_media}
        bottomHeroText={page.acf.bottom_hero_text}
        bottomHeroImage={page.acf.bottom_hero_image}
        intro={page.acf.intro_paragraph}
        intro_title={page.acf.intro_h1}
        subtitle={page.acf.hero_subtitle}
        hero_title={page.acf.hero_title}
        children={page.children}
        top_left_box_text={page.acf.text_top_left}
        top_right_box_text={page.acf.text_top_right}
        bottom_left_box_text={page.acf.text_bottom_left}
        bottom_right_box_text={page.acf.text_bottom_right}
        top_left_box_text_title={page.acf.text_top_left_title}
        top_right_box_text_title={page.acf.text_top_right_title}
        bottom_left_box_text_title={page.acf.text_bottom_left_title}
        bottom_right_box_text_title={page.acf.text_bottom_right_title}
        boxBackgroundImage={page.acf.background_image_top_left}
        boxBackgroundImage2={page.acf.background_image_bottom_right}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById3($id: String!) {
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
        intro_h1

        background_image_top_left {
          localFile {
            childImageSharp {
              fluid(quality: 80, maxWidth: 2160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        background_image_bottom_right {
          localFile {
            childImageSharp {
              fluid(quality: 80, maxWidth: 2160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        text_top_left
        text_top_right
        text_bottom_left
        text_bottom_right
        text_top_left_title
        text_top_right_title
        text_bottom_left_title
        text_bottom_right_title

        bottom_hero_text
        bottom_hero_image {
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
