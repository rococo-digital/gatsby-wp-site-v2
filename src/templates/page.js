import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BackgroundImage from "gatsby-background-image-es5"
import Tiles from "bulma/bulma.sass";


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

export const PageTemplate = ({ title, content, featuredImage }) => {
  return (
    <div>
    {featuredImage ? 
     
        <Img  tag="section"  fluid={featuredImage.localFile.childImageSharp.fluid}  backgroundColor={`#000`}>  
         <section class="hero">
           
          <div class="hero-body">
              <div class="container">
                  <h1 class="title">
                  {title}
                  </h1>
                  <h2 class="subtitle">
                  
                  </h2>

            


              </div>
          </div>
          </section>
          </Img>
      
    :<div></div>}
    <section className="section section--gradient">
      <div className="container">
      
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
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
      <PageTemplate title={page.title} content={page.content} featuredImage={page.featured_media} />
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
