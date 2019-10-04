import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"


const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "acl.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 180) {
              ...GatsbyImageSharpFluid_withWebp 
            }
          }
        }
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
              Nationwide specialist criminal defence solicitors based just south of Gatwick and Crawley, near Haywards Heath. We advise, assist and represent individuals or businesses accused of criminal and motoring offences.
              </p><p>
                  We are authorised and regulated by the Solicitors Regulation Authority 592182
                  </p>
                <div className="columns">
                
                  <div className="column is-half">
                    <figure className=" is-inline is-marginless">
                      <iframe frameBorder="0" scrolling="no" allowtransparency="true" src="https://cdn.yoshki.com/iframe/55845r.html"></iframe>
                    </figure>
                  </div>
                  <div className="column is-half">
                    {data.file && <Img style={{'maxWidth': '300px'}}fluid={data.file.childImageSharp.fluid} />}
                  </div>
                </div>
                 
                  
    
                  
               
       
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column center-text is-half">
              <div className="rococo-background">
                <span className="dev-title">Developer</span>
                <p>Rococo Digital</p>
              </div>
            </div>
          </div>
        </div>
      
      </footer>
    )}
  />
)

export default Footer
