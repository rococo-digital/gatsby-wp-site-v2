import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import github from '../img/github-icon.svg'
import logo from '../img/iydl_logo.svg'
import m23logo from '../img/m23_law_logo.svg'

export const MainMenu = ({path}) => (
  
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
            <figure className="image brand-icon">
              <img src={logo} alt="In Your Defence" style={{ width: '108px' }} />
            </figure>
          </Link>
          
          {path && path.includes("motoring-offences")  && 
            <Link to="/motoring-offences/" className="navbar-item">
            <figure className="image brand-icon">
              <img src={m23logo} alt="M23 Law" style={{ width: '148px' }} />
            </figure>
          </Link>}

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
          <div className="navbar-end">
            {data.allWordpressWpApiMenusMenusItems.edges.map((menu, key) => (<div key={key} className="navbar-end">{menu.node.name === "MainMenu" && 
            menu.node.items.map(
              (item, index) => (
                
                <div 
                  className={
                    item.wordpress_children
                      ? 'navbar-item has-dropdown is-hoverable'
                      : 'navbar-item is-paddingless'
                  }
                  key={index}
                >
                  <Link
                    className={
                      item.wordpress_children ? 'navbar-link' : 'navbar-item  not-dropdown'
                    }
                    to={item.url
                      .split('/')
                      .slice(3)
                      .join('/')}
                    
                  >
                    {item.title}
                  </Link>

                  <div
                    className={
                      item.wordpress_children ? 'navbar-dropdown' : ' '
                    }
                  >
                    {item.wordpress_children &&
                      item.wordpress_children.map((subitem, subindex) => (
                        <Link
                          className="navbar-item"
                          to={subitem.url
                            .split('/')
                            .slice(3)
                            .join('/')}
                            key={subindex}
                        >
                          {subitem.title}
                        </Link>
                      ))}
                  </div>
                </div>
              )
            )}</div>))}
          </div>

        </div>
      </nav>
    )}
  />
  
)

MainMenu.propTypes = {
  path: PropTypes.string
};

export default MainMenu
