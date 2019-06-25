import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

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

const bg_image = ({ objFit = `cover`, objPosition = `50% 50%`, ...props }) => (
  <BackgroundImage
    {...props}
    imgStyle={{
      ...props.imgStyle,
      objectFit: objFit,
      objectPosition: objPosition,
      fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`,
      backgroundImage: `url(${Background})`,
    }}
  />
)



export const PageTemplate = ({
  title,
  content,
  featuredImage,
  bgImage,
  intro,
  subtitle,
  hero_title,
  children,
}) => {
  
  return (
    <main>
      
      {featuredImage ? (
        <Img
          tag="section"
          fluid={featuredImage.localFile.childImageSharp.fluid}
          backgroundColor={`#000`}
        >
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <div className="tile is-ancestor">
                  <div className="tile is-parent is-4">
                    <article className="tile is-child box">
                      <p className="title">{hero_title ? hero_title : title}</p>
                      <p className="subtitle has-text-white has-text-weight-bold">{subtitle}</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Img>
      ) : (
        ''
      )}

      <section id="intro" className="section has-background-grey">
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
        bgImage={page.acf.background_image}
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
        background_image {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 800) {
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
