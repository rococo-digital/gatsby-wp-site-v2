
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './Layout'
import PostList from './PostList'
import Pagination from './Pagination'


export default class BlogPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost

    return (
      <Layout>
        <PostList posts={posts} title="Latest posts" />
        <Pagination pageContext={pageContext} pathPrefix="/about-us/blog/" />
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export const pageQuery = graphql`
  query {
    allWordpressPost(
      sort: { fields: date, order: DESC }

      
    ) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
