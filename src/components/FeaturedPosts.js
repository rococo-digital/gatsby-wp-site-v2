import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FeaturedPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(limit: 3)  {
          edges {
            node {
              id
              slug
              title
              content
            }
          }
        }
      }
    `}
    
    render={data => (
      <section id="Latest Posts" className="section">
        <div className="container">
          <h1 className="title">Recent Articles</h1>
          <div className="tile is-ancestor">
          {data.allWordpressPost.edges.map(edge => (
            
            <div className="tile is-parent">
            <article className="tile is-child box has-background-grey-light">
            <p className="title"><Link
            className="post-listing"
            to={edge.node.slug}
            key={edge.node.id}
          >
            {edge.node.title}
            
            </Link>
            </p>
            <p className="subtitle">{(edge.node.content.substring(edge.node.content.indexOf("<p>") + 3, edge.node.content.indexOf("</p>"))).substring(0, 100)}..</p>
            </article>
            </div>
           
           
            
          ))}
           </div>
        </div>
      </section>
    )}
  />
)

export default FeaturedPosts

