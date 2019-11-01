import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class BlogPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          <ul className="columns is-multiline is-3 is-variable ">
          {posts.map(({ node: post }) => (
            <div className="blog-column column is-half">
            <li
              className="content box fill-height has-background-grey has-text-white-ter"
              
              key={post.id}
            >
              <p>
                <Link className="title has-text-white-ter" to={post.slug}>
                  {post.title}
                </Link>
                <span> &bull; </span>
                <small>
                  {post.date} - posted by{' '}
                  <Link to={`/author/${post.author.slug}`}>
                    {post.author.name}
                  </Link>
                </small>
              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                  }}
                />
                <Link className="button is-light" to={post.slug}>
                  Keep Reading →
                </Link>
              </div>
            </li>
            </div>
          ))}
          </ul>
        </div>
      </section>
    )
  }
}

BlogPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
