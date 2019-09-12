import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Hero } from '../components/Hero'
import { HeroBottom } from '../components/HeroBottom'
import TwoColumns from '../components/TwoColumns'
import ContactForm from '../components/ContactForm'

export const ContactPageTemplate = ({
  title,
  content,
  featuredImage,
  bottomHeroImage,
  bottomHeroText,
  display_icons,
  intro,
  intro_title,
  subtitle,
  hero_title,
  children,
  top_left_box_text,
  top_right_box_text,
  middle_left_box_text,
  middle_right_box_text,
  bottom_left_box_text,
  bottom_right_box_text,
  top_left_box_text_title,
  top_right_box_text_title,
  middle_left_box_text_title,
  middle_right_box_text_title,
  bottom_left_box_text_title,
  bottom_right_box_text_title,
  top_left_link,
  top_right_link,
  middle_left_link,
  middle_right_link,
  bottom_left_link,
  bottom_right_link,
  boxBackgroundImage,
  boxBackgroundImage2,
  boxBackgroundImage3,
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

      <ContactForm />

      <div
        className="is-fullwidth"
        dangerouslySetInnerHTML={{ __html: content }}
      />

    <TwoColumns text1={top_left_box_text} text2={top_right_box_text} text3={middle_left_box_text} text4={middle_right_box_text} text5={bottom_right_box_text} text6={bottom_left_box_text}  title1={top_left_box_text_title} title2={top_right_box_text_title} title3={middle_left_box_text_title} title4={middle_right_box_text_title} title5={bottom_left_box_text_title} title6={bottom_right_box_text_title} link1={top_left_link} link2={top_right_link} link3={middle_left_link} link4={middle_right_link} link5={bottom_left_link} link6={bottom_right_link} image1={boxBackgroundImage} image2={boxBackgroundImage2} image3={boxBackgroundImage3}/>

    {display_icons && <IconBar />}

    {bottomHeroImage && bottomHeroText && <HeroBottom featuredImage={bottomHeroImage} text={bottomHeroText} />} 
    </main>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <ContactPageTemplate
        title={page.title}
        content={page.content}
        featuredImage={page.featured_media}
        bottomHeroText={page.acf.bottom_hero_text}
        bottomHeroImage={page.acf.bottom_hero_image}
        intro={page.acf.intro_paragraph}
        display_icons={page.acf.display_icons}
        intro_title={page.acf.intro_h1}
        subtitle={page.acf.hero_subtitle}
        hero_title={page.acf.hero_title}
        children={page.children}
        top_left_box_text={page.acf.text_top_left}
        top_right_box_text={page.acf.text_top_right}
        middle_left_box_text={page.acf.text_middle_left}
        middle_right_box_text={page.acf.text_middle_right}
        bottom_left_box_text={page.acf.text_bottom_left}
        bottom_right_box_text={page.acf.text_bottom_right}
        top_left_box_text_title={page.acf.text_top_left_title}
        top_right_box_text_title={page.acf.text_top_right_title}
        middle_left_box_text_title={page.acf.text_middle_left_title}
        middle_right_box_text_title={page.acf.text_middle_right_title}
        bottom_left_box_text_title={page.acf.text_bottom_left_title}
        bottom_right_box_text_title={page.acf.text_bottom_right_title}
        top_left_link={page.acf.link_top_left}
        top_righ_linkt={page.acf.link_top_right}
        middle_left_link={page.acf.link_middle_left}
        middle_right_link={page.acf.link_middle_right}
        bottom_left_link={page.acf.link_bottom_left}
        bottom_right_link={page.acf.link_bottom_right}
        boxBackgroundImage={page.acf.background_image_top_left}
        boxBackgroundImage3={page.acf.background_image_bottom_right}
        boxBackgroundImage2={page.acf.background_image_middle_right}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById2($id: String!) {
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
