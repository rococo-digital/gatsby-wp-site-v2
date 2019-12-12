import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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

export const HeroBottom = ({ featuredImage, text }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "iydl-video-still.jpg" }) {
          childImageSharp{
            original{
              src
            }
            fluid(quality: 80, maxWidth: 1024) {
              ...GatsbyImageSharpFluid_withWebp 
            }
          }
        }
      }
    `}
    render={data => (
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
              <div className="columns is-centered is-vcentered">
                <div className="column is-6">

                <video controls poster={data.file.childImageSharp.fluid.srcWebp}>
                    <source src="https://iydl.co.uk/vid/iydl_video_intro.mp4" type="video/mp4"/>
                </video>

                </div>
                <div className="column is-6">
                  <p className="title has-text-white has-text-weight-bold has-text-centered">
                    {text}
                    
                  </p>
                  <p className="has-text-centered">
                  <a className="button is-light" href="/contact/">Contact Us Now</a>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </Img>
    )}
  </div>
    )}
    />)


HeroBottom.propTypes = {
  text: PropTypes.string,
}

export default HeroBottom
