import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { ColumnBox } from './ColumnBox'

export const TwoColumns = ({ text1, text2, text3, text4, title1, title2, title3, title4, image1, image2 }) => {
  
  return(
  
  <section id="side-by-side" className="section">
    {text3 && text4 ? (
    <div className="container is-fullhd">
      
      <div className="tile is-ancestor">
        <ColumnBox title={title1} text={text1} image={image1} classes="has-background-dark tile is-parent"/>
        <ColumnBox title={title2} text={text2} classes="has-background-grey-dark tile is-parent"/>
      </div>
      <div className="tile is-ancestor">
        <ColumnBox title={title3} text={text3} classes="has-background-grey tile is-parent"/>
        <ColumnBox title={title4} text={text4} image={image2} classes="has-background-primary tile is-parent"/>
      </div>
    </div>
      ) : (
        <div className="container is-fullhd">
      <div className="tile is-ancestor">
        <ColumnBox title={title1} text={text1} image={image1} classes="has-background-dark tile is-parent"/>
        <ColumnBox title={title2} text={text2} classes="has-background-grey-dark tile is-parent"/>
      </div>
      </div>
      )}

  </section>
)}

export default TwoColumns
