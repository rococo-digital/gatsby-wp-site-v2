class MainMenu extends Component {
    render() {
    
        const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items
        console.log(data)
        return (
            <div>
                <h1>Main Menu</h1>
                <ul>
                    {data.map((item) =>
                        <li key={item.object_slug}>
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                            <ul>
                                {item.wordpress_children && item.wordpress_children.map((subitem) =>
                                    <li key={item.wordpress_id}>
                                        <Link to={subitem.url}>
                                            {subitem.title}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

    export const query = graphql`
    query LayoutQuery {
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
  `