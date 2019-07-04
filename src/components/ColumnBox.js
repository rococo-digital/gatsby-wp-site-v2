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

export const ColumnBox = ({ title, text, image, classes}) => {
  const columnClasses = `column ${classes}`
  return (
    <div >
      {image ? (
        <Img
          tag="section"
          className={columnClasses}
          fluid={image.localFile.childImageSharp.fluid}
          backgroundColor={`#000`}  
        >
          <article class="tile is-child box is-shadowless">
            <p className="title has-text-white-ter">
              <span className="has-text-weight-bold">{title}</span>
            </p>
            <p className="subtitle has-text-white-ter">{text}</p>
          </article>
        </Img>
      ) : (
        <div className={columnClasses}>
          <article class="tile is-child box is-shadowless">
            <p className="title has-text-white-ter">
              <span className="has-text-weight-bold">{title}</span>
            </p>
            <p className="subtitle has-text-white-ter">{text}</p>
          </article>
      </div>
      )}
    </div>
  )
}

export default ColumnBox
