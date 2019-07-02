import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/iydl-logov.svg'

const MainMenu = () => (
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
      <nav
        className="navbar is-white"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </figure>
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
            onClick={() => {
              let toggle = document.querySelector('.navbar-burger')
              let menu = document.querySelector('.navbar-menu')
              toggle.classList.toggle('is-active')
              menu.classList.toggle('is-active')
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="mainNavbar" className="navbar-menu">
          <div className="navbar-start">
            {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <div
                  className={
                    item.wordpress_children
                      ? 'navbar-item has-dropdown is-hoverable'
                      : 'navbar-item'
                  }
                >
                  <Link
                    className={
                      item.wordpress_children ? 'navbar-link' : 'navbar-item'
                    }
                    to={item.url
                      .split('/')
                      .slice(3)
                      .join('/')}
                    key={item.slug}
                  >
                    {item.title}
                  </Link>

                  <div
                    className={
                      item.wordpress_children ? 'navbar-dropdown' : ' '
                    }
                  >
                    {item.wordpress_children &&
                      item.wordpress_children.map(subitem => (
                        <Link
                          className="navbar-item"
                          to={subitem.url
                            .split('/')
                            .slice(3)
                            .join('/')}
                        >
                          {subitem.title}
                        </Link>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="navbar-end">
            
          </div>
        </div>
      </nav>
    )}
  />
)

export default MainMenu
