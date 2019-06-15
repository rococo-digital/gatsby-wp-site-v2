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
        
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <figure className="image">
                  <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                </figure>
              </Link>

              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
            
            <div id="mainNavbar" class="navbar-menu">
                <div className="navbar-start">
                    {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                    
                    <div className={item.wordpress_children ? 'navbar-item has-dropdown is-hoverable' : 'navbar-item'}>
                        <Link className={item.wordpress_children ? 'navbar-link' : 'navbar-item'}
                            to={item.url
                                .split('/')
                                .slice(3)
                                .join('/')}
                            key={item.slug}>
                            {item.title}
                        </Link>
                    
                        <div className={item.wordpress_children ? 'navbar-dropdown' : " "}>
                        
                            {item.wordpress_children && item.wordpress_children.map((subitem) =>
                            
                              
                                    <Link className="navbar-item"
                                        to={subitem.url
                                            .split('/')
                                            .slice(3)
                                            .join('/')}>
                                        {subitem.title}
                                    </Link>
                                
                                
<<<<<<< HEAD
                            
                                </div>
                                    )}
                           

=======
                            )}
>>>>>>> parent of bc8ef49... navbar fix + started level 2 dropdown
                        </div>
                    </div> 
           
                    ))}
              
                </div>
            
            
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