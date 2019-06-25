import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              name
              count
              items {
                order
                title
                url
                wordpress_children {
                  wordpress_id
                  title
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <footer className="footer has-background-primary">
        <div className="container content">
            <div className="columns">
                <div className="column">
                    <p className="iyd-footer-link-title">Site Links</p>
                    
                    {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                        item => (
                                <p class="bd-footer-link">
                        
                            <Link
                                
                                to={item.url
                                .split('/')
                                .slice(3)
                                .join('/')}
                                key={item.slug}
                            >
                                {item.title}
                            </Link>
                            </p>
                        ))}
                    
                </div>
                <div className="column">
                    <p className="iyd-footer-link-title">Company</p>
                </div>
                <div className="column">
                    <p className="iyd-footer-link-title">Contact</p>
                </div>
            </div>
          <p>
            <strong>In Your Defence</strong>
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
