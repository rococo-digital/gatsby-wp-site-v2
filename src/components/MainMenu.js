import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'



  const MainMenu = () => (
    <StaticQuery
      query={graphql`

        query{
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
        <nav className="navbar is-transparent">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <figure className="image">
                  <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                </figure>
              </Link>
            </div>
            
                <ul className="navbar-start">
              {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                  
                <li key={item.object_slug}>
                    
                    {item.wordpress_children ? 
                        <Link className="navbar-item has-dropdown is-hoverable"
                            to={item.url}>
                            {item.title}
                        </Link> : 
                        <Link className="navbar-item"
                            to={item.url}>
                            {item.title}
                        </Link> }
                        
                        <ul>
                            {item.wordpress_children && item.wordpress_children.map((subitem) =>
                            
                                <li key={item.wordpress_id}>
                                    
                                    <Link className="navbar-item"
                                        to={subitem.url}>
                                        {subitem.title}
                                    </Link>
                                </li>
                                
                            )}
                        </ul>
                </li>
              ))}
              </ul >
            
            
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/GatsbyCentral/gatsby-starter-wordpress"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </nav>
      )}
    />
  )
  
  export default MainMenu