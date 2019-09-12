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
              <p className="iyd-footer-link-title">In Your Defence Ltd</p>
              <p>
              
                Bolney Place
                <br />
                Cowfold Road
                <br />
                Bolney
                <br />
                Haywards Heath
                <br />
                West Sussex
                <br />
                RH17 5QT
              </p>
            </div>
            <div className="column">
              <p className="iyd-footer-link-title">Contact</p>
              <p>
                <a
                href="tel:+44 (0)1293 550400"
                >tel: +44 (0)1293 550400</a>
                <br />
                <a href="mailto:support@iydl.co.uk"
                >
                email: support@iydl.co.uk</a>
                
              </p>
            </div>
            <div className="column">
              <p className="iyd-footer-link-title">About</p>
              <p>
              Specialist Criminal Defence solicitors and lawyers based in Crawley. In Your Defence offer representation to people accused of or under suspicion of Criminal Offences. Covering General Offences, Motoring Offences and Sexual Offences Nationwide.
              </p>
              <iframe frameborder="0" scrolling="no" allowTransparency="true" src="https://cdn.yoshki.com/iframe/55845r.html" ></iframe>
              <p>
              We are authorised and regulated by the Solicitors Regulation Authority 592182
              </p>
            </div>
          </div>
        </div>
      
      </footer>
    )}
  />
)

export default Footer
