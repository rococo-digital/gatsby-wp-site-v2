import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Hero } from '../components/Hero'
import { HeroBottom } from '../components/HeroBottom'
import { SubNavList } from '../components/SubNavList'
import TwoColumns from '../components/TwoColumns';
import IconBar from '../components/IconBar'
import FeaturedPosts from '../components/FeaturedPosts'
import Intro from '../components/Intro'


export const PageTemplate = ({
  title,
  content,
  contentLower,
  featuredImage,
  bottomHeroImage,
  bottomHeroText,
  display_icons,
  intro,
  intro_title,
  subtitle,
  hero_title,
  hero_cta_title,
  slug,
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
  above_content_bool,

}) => {
  
  return (
    <main>

      <Hero featuredImage={featuredImage} title={hero_title ? hero_title : title} subtitle={subtitle} cta={hero_cta_title}/>

      {slug == 'home' ? 
        <section id="intro" className="section has-background-grey">
          <div className="container content has-text-white-ter">
              <article>
                <h2 className="subtitle has-text-white-ter is-size-5 has-text-weight-bold">
                  "If I had only a few words to summarise my impressions of Andrew Parker and his team at In Your Defence it would be Professional, Thorough, No-Nonsense, Direct, and the results…Brilliant... " <Link to="about-us/testimonials">Read more</Link>
                </h2>
            </article>
            
          </div>
        </section>
      : <Intro title={intro_title} subtitle={intro}/>}

      <SubNavList slug={slug}/>

      {above_content_bool && <TwoColumns text1={top_left_box_text} text2={top_right_box_text} text3={middle_left_box_text} text4={middle_right_box_text} text5={bottom_right_box_text} text6={bottom_left_box_text}  title1={top_left_box_text_title} title2={top_right_box_text_title} title3={middle_left_box_text_title} title4={middle_right_box_text_title} title5={bottom_left_box_text_title} title6={bottom_right_box_text_title} link1={top_left_link} link2={top_right_link} link3={middle_left_link} link4={middle_right_link} link5={bottom_left_link} link6={bottom_right_link} image1={boxBackgroundImage} image2={boxBackgroundImage2} image3={boxBackgroundImage3}/>}
      
      {/* {slug == 'our-approach' && 
        <section id="video" className="section">
          <div className="container content">
            <video controls poster={iydlVideoStill}>
              <source src={iydlVideo} type="video/mp4" />
            </video>
          </div>
        </section>
      } */}
      {content && <div
        className="is-fullwidth"
        dangerouslySetInnerHTML={{ __html: content }}
      />}

      {!above_content_bool && <TwoColumns text1={top_left_box_text} text2={top_right_box_text} text3={middle_left_box_text} text4={middle_right_box_text} text5={bottom_right_box_text} text6={bottom_left_box_text}  title1={top_left_box_text_title} title2={top_right_box_text_title} title3={middle_left_box_text_title} title4={middle_right_box_text_title} title5={bottom_left_box_text_title} title6={bottom_right_box_text_title} link1={top_left_link} link2={top_right_link} link3={middle_left_link} link4={middle_right_link} link5={bottom_left_link} link6={bottom_right_link} image1={boxBackgroundImage} image2={boxBackgroundImage2} image3={boxBackgroundImage3}/>}

      {display_icons && <IconBar />}

      {contentLower && <div
        className="is-fullwidth"
        dangerouslySetInnerHTML={{ __html: contentLower }}
      />}

      {bottomHeroImage && bottomHeroText && <HeroBottom featuredImage={bottomHeroImage} text={bottomHeroText} />}

      {display_icons && <FeaturedPosts />}

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
    <Layout siteUrl={data.site.siteMetadata.siteUrl} slug={page.slug} path={page.path} image={page.featured_media} yoast={page.yoast_meta} menus={data.allWordpressWpApiMenusMenusItems}>
      <PageTemplate
        title={page.title}
        content={page.content}
        contentLower={page.acf.content_lower}
        featuredImage={page.featured_media}
        bottomHeroText={page.acf.bottom_hero_text}
        bottomHeroImage={page.acf.bottom_hero_image}
        intro={page.acf.intro_paragraph}
        display_icons={page.acf.display_icons}
        intro_title={page.acf.intro_h1}
        subtitle={page.acf.hero_subtitle}
        hero_title={page.acf.hero_title}
        hero_cta_title={page.acf.hero_cta_title}
        slug={page.slug}

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
        above_content_bool={page.acf.above_content_bool}
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
    site {
      siteMetadata {
        siteUrl
      }
    }
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          name
          count
          items {
            order
            title
            url
            wordpress_children {
              wordpress_id
              title
              url
            }
          }
        }
      }
    }
    wordpressPage(id: { eq: $id }) {
      path
      title
      content
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
        yoast_wpseo_canonical
        yoast_wpseo_facebook_title
        yoast_wpseo_facebook_description
        yoast_wpseo_facebook_type
        yoast_wpseo_facebook_image
        yoast_wpseo_twitter_title
        yoast_wpseo_twitter_description
        yoast_wpseo_twitter_image
        yoast_wpseo_social_url
        yoast_wpseo_company_or_person
        yoast_wpseo_person_name
        yoast_wpseo_company_name
        yoast_wpseo_company_logo
        yoast_wpseo_website_name
      }
    
      slug
      acf {
        content_lower
        hero_subtitle
        hero_title
        hero_cta_title
        intro_paragraph
        intro_h1
        display_icons
        background_image_top_left{
          localFile {
            childImageSharp {
              fluid(quality: 80, maxWidth: 2160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        background_image_bottom_right{
          localFile {
            childImageSharp {
              fluid(quality: 80, maxWidth: 2160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        background_image_middle_right{
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
        text_middle_left
        text_middle_right
        text_bottom_left
        text_bottom_right
        text_top_left_title
        text_top_right_title
        text_bottom_left_title
        text_bottom_right_title
        text_middle_left_title
        text_middle_right_title
        link_top_left
        link_top_right
        link_middle_left
        link_middle_right
        link_bottom_left
        link_bottom_right
        above_content_bool
        
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
