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
  

export const HeroBottom = ({ featuredImage, title, subtitle }) => (
    <div>
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
                    <article className="tile is-child">
                      <p className="title has-text-grey">{title}</p>
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
      </div>
)

HeroBottom.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

export default HeroBottom
