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
}) => {
  return (
    <main>
      {featuredImage ? (
        <Img
          tag="section"
          fluid={featuredImage.localFile.childImageSharp.fluid}
          backgroundColor={`#000`}
        >
          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <div class="tile is-ancestor">
                  <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                      <p class="title">{title}</p>
                      <p class="subtitle">{subtitle}</p>
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
      acf {
        hero_subtitle
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
