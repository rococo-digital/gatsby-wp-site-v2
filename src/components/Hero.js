import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image-es5'

const Img = ({ objFit = `cover`, objPosition = `50% 50%`, ...props }) => (
    <BackgroundImage
      {...props}
      imgstyle={{
        ...props.imgstyle,
        objectFit: objFit,
        objectPosition: objPosition,
        fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`,
      }}
    />
  )
  

export const Hero = ({ featuredImage, title, subtitle }) => (
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
                    <article className="tile is-child box">
                      <h1 className="title has-text-grey">{title}</h1>
                      <h2 className="subtitle has-text-white has-text-weight-bold">{subtitle}</h2>
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

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

export default Hero
