import React from 'react'
import Layout from '../components/Layout'
import { Link, StaticQuery, graphql } from 'gatsby'

const NotFoundPage = () => (
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
  <Layout>

    <section id="404" className="section">
            <div className="container content has-text-white-ter">
                <article> 
                <h1 className="title">
                  Page not found
                </h1>
                <h2 className="subtitle is-size-5 has-text-weight-normal">Something has gone wrong, if you stumbled on this page unexpectedly we apologise. Hopefully the page you are looking for can be found below</h2>
                <div className="columns">
                  <div className="column">

                    {data.allWordpressWpApiMenusMenusItems.edges.map((menu, key) => (
                      <div key={key}>
                        {menu.node.name === 'footer-menu' &&
                          menu.node.items.map((item, index) => (
                            <p className="iyd-footer-link" key={index}>
                              <Link
                                to={item.url
                                  .split('/')
                                  .slice(3)
                                  .join('/')}
                              >
                                {item.title}
                              </Link>
                            </p>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
      </section>
  </Layout>)
    }
    />
)

export default NotFoundPage
