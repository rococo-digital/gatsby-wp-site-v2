import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image-es5'

const Img = ({ objFit = `cover`, objPosition = `50% 50%`, ...props }) => (
  <BackgroundImage
    {...props}
    style={{
      height: '100%',
    }}
    imgstyle={{
      ...props.imgstyle,
      objectFit: objFit,
      objectPosition: objPosition,
      fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}; height=100%"`,
    }}
  />
)

export const ColumnBox = ({
  title,
  text,
  image,
  link,
  classes,
  imageClasses,
}) => {
  const columnClasses = `column is-sidepaddingless ${classes}`
  return (
    <div className={columnClasses}>
      {image ? (
        <Img
          tag="section"
          className={imageClasses}
          fluid={image.localFile.childImageSharp.fluid}
          backgroundColor={`#000`}
        >
          <article className="article-padded gradient-fade full-height">
            <h2 className="is-size-3 has-text-weight-bold has-text-white-ter">
              {title}
            </h2>

            <p className="subtitle has-text-white-ter"
              dangerouslySetInnerHTML={{ __html: text }}/>
            {link && (
              <Link to={link} className="button is-light">
                More info
              </Link>
            )}
          </article>
        </Img>
      ) : (
        <div>
          <article className="article-padded full-height">
            <h2 className="is-size-3 has-text-weight-bold has-text-white-ter">
              {title}
            </h2>

            <p className="subtitle has-text-white-ter"
              dangerouslySetInnerHTML={{ __html: text }}/>

            {link && (
              <Link to={link} className="button is-light">
                More info
              </Link>
            )}
          </article>
        </div>
      )}
    </div>
  )
}

export default ColumnBox
