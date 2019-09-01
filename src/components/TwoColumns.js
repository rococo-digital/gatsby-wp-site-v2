import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { ColumnBox } from './ColumnBox'

export const TwoColumns = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  image1,
  image2,
  image3,
}) => {
  if(text1 && text2){
  return (
    <section id="side-by-side" className="section">
      
        <div className="container is-fullhd">
          {text1 && text2 &&
          <div>
            <div className="columns  is-hidden-tablet">
              <ColumnBox
                title={title2}
                text={text2}
                classes="has-background-grey is-half"
              />
              {image1 ? 
              <ColumnBox
                title={title1}
                text={text1}
                image={image1}
                classes="has-background-dark is-half"
              /> : 
              <ColumnBox
                title={title1}
                text={text1}
                classes="has-background-dark is-half"
              />}
              
            </div>
            <div className="columns  is-hidden-mobile">
              {image1 ? 
              <ColumnBox
                title={title1}
                text={text1}
                image={image1}
                classes="has-background-dark is-half"
              /> : 
              <ColumnBox
                title={title1}
                text={text1}
                classes="has-background-dark is-half"
              />}
              <ColumnBox
                title={title2}
                text={text2}
                classes="has-background-grey is-half"
              />
            </div>
          </div>}
          {text3 && text4 &&
          <div className="tile is-ancestor">
            <ColumnBox
              title={title3}
              text={text3}
              classes="has-background-grey is-half"
            />
            {image2 ? 
            <ColumnBox
              title={title4}
              text={text4}
              image={image2}
              classes="has-background-dark is-half"
            /> :
            <ColumnBox
              title={title4}
              text={text4}
              classes="has-background-dark is-half"
            />}
          </div>}
          {text5 && text6 &&
          <div>
            <div className="columns is-hidden-tablet">
              <ColumnBox
                title={title6}
                text={text6}
                classes="has-background-grey is-half"
              />
              {image3 ? 
              <ColumnBox
                title={title5}
                text={text5}
                image={image3}
                classes="has-background-dark is-half"
                
              /> : 
              <ColumnBox
                title={title5}
                text={text5}
                classes="has-background-dark is-half"
              />}
            </div>
            <div className="columns is-hidden-mobile">
              {image3 ? 
              <ColumnBox
                title={title5}
                text={text5}
                image={image3}
                classes="has-background-dark is-half"
                
              /> : 
              <ColumnBox
                title={title5}
                text={text5}
                classes="has-background-dark is-half"
              />}
              <ColumnBox
                title={title6}
                text={text6}
                classes="has-background-grey is-half"
              />
            </div>
          </div>}
        </div>
      
    </section>
  )}
  return(false)
 
}

export default TwoColumns
