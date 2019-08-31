import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

export const SubNavList = ({ slug }) => (
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

                object_slug
                wordpress_children {
                  wordpress_id
                  title

                  object_slug
                }
              }
            }
          }
        }
      }
    `}
    const
    pageURL
    render={data => {
      let parent
      let mainmenu
    
      data.allWordpressWpApiMenusMenusItems.edges.map((menu) => {if(menu.node.name === "MainMenu"){
        menu.node.items.map(function(
          cell
        ) {
          if (cell.object_slug.includes(slug)) {
            parent = cell
           
          }
        })
        
      }})
            
      
      let object = null
      if (parent) {
  
        if (parent.wordpress_children) {
        
          object = (
            <section id="subnav" className="section">
              <div className="container content">
                <ul className="services-list">
                  {parent.wordpress_children &&
                    parent.wordpress_children.map((child, subindex) => (
                      <Link
                        to={parent.object_slug + '/' + child.object_slug}
                        key={subindex}
                      >
                        <li>{child.title}</li>
                      </Link>
                    ))}
                </ul>
              </div>
            </section>
          )
        }
      }

      return object
    }}
  />
)

export default SubNavList
