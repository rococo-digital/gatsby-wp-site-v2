import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { ColumnBox } from './ColumnBox'

export const TwoColumns = ({
  text1,
  text2,
  text3,
  text4,
  title1,
  title2,
  title3,
  title4,
  image1,
  image2,
}) => {
  if(text1 && text2){
  return (
    <section id="side-by-side" className="section">
      {text3 && text4 ? (
        <div className="container is-fullhd">
          <div className="columns">
            <ColumnBox
              title={title1}
              text={text1}
              image={image1}
              classes="has-background-dark is-half"
            />
            <ColumnBox
              title={title2}
              text={text2}
              classes="has-background-grey is-half"
            />
          </div>
          <div className="tile is-ancestor">
            <ColumnBox
              title={title3}
              text={text3}
              classes="has-background-grey is-half"
            />
            <ColumnBox
              title={title4}
              text={text4}
              image={image2}
              classes="has-background-dark column  is-half"
            />
          </div>
        </div>
      ) : (
        <div className="container is-fullhd">
          <div className="columns is-ancestor">
            <ColumnBox
              title={title1}
              text={text1}
              image={image1}
              classes="has-background-dark is-half"
            />
            <ColumnBox
              title={title2}
              text={text2}
              classes="has-background-grey-dark is-half "
            />
          </div>
        </div>
      )}
    </section>
  )}
  return(false)
 
}

export default TwoColumns
