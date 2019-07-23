import React from 'react'
import PropTypes from 'prop-types'
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

export const HeroBottom = ({ featuredImage, text }) => (
  <div>
    {featuredImage && text && (
      <Img
        tag="section"
        fluid={featuredImage.localFile.childImageSharp.fluid}
        backgroundColor={`#000`}
      >
        <section className="hero hero-bottom">
          <div className="hero-body">
            <div className="box">
              <div className="columns is-centered">
                <div className="column is-8">
                  <p className="title has-text-white has-text-weight-bold has-text-centered">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Img>
    )}
  </div>
)

HeroBottom.propTypes = {
  text: PropTypes.string,
}

export default HeroBottom
