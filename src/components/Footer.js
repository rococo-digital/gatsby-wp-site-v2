import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

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
        file(relativePath: { eq: "sra.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed( height :225) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <footer className="footer section has-background-primary">
        <div className="container content">
          <div className="columns">
            <div className="column">
              <p className="iyd-footer-link-title">Site Map</p>

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
            <div className="column">
              <p className="iyd-footer-link-title">Company</p>
              <p>
                Bolney Place
                <br />
                Cowfold Road
                <br />
                Bolney
                <br />
                West Sussex
                <br />
                RH17 5QT
                <br />
                United Kingdom
              </p>
            </div>
            <div className="column">
              <p className="iyd-footer-link-title">About</p>
              <p>
                Specialist Criminal Defence Solicitors and Lawyers, In Your
                Defence Ltd Offer Representation To People Accused Of Or Under
                Suspicion Of Criminal Offences.
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
        <div className="column is-one-third">
          <Img fixed={data.file.childImageSharp.fixed} />
          </div>
        </div>
      </footer>
    )}
  />
)

export default Footer
