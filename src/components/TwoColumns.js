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

export const TwoColumns = ({ text1, text2, text3, text4, image1, image2 }) => (
  <section id="side-by-side" className="section">
    <div className="container is-fullhd">
      <div className="columns">
        
            {image1 ? (
              <Img
                tag="section"
                className="column has-background-grey"
                fluid={image1.localFile.childImageSharp.fluid}
                backgroundColor={`#000`}
              >
                <article class="tile is-child box is-shadowless">
                <p className="title has-text-white-ter">
                  <span className="has-text-weight-bold">Title</span>
                </p>
                <p className="subtitle has-text-white-ter">{text1}</p>
                </article>
              </Img>
            ) : (
              <p className="subtitle has-text-white-ter">{text1}</p>
            )}
         
        
        <div className="column has-background-grey-light">
          <article className="tile is-child box is-shadowless has-background-grey-light">
            <p className="title">
              <span className="has-text-weight-bold">What You Get</span>
            </p>
            <p className="subtitle">{text2}</p>
            <a className="button is-light">More info</a>
          </article>
        </div>
      </div>
    </div>
  </section>
)

export default TwoColumns
