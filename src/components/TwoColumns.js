import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image-es5'

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
  

export const TwoColumns = ({ featuredImage, title, subtitle }) => (
    <div>
    </div>
)

const Block = ({ data }) => {
  const { wordpressPage: page } = data

  return (
      <TwoColumns
        featuredImage={page.featured_media}
        intro={page.acf.intro_paragraph}
        subtitle={page.acf.hero_subtitle}
        hero_title={page.acf.hero_title}
        
      />
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}
export default Hero

export const pageQuery = graphql`
  query{
    wordpressPage(id: { eq: $id }) {
      
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
