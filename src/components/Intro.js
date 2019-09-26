import React from 'react'
import PropTypes from 'prop-types'
  

export const Intro = ({ title, subtitle }) => (
  <section id="intro" className={subtitle ? "section has-background-grey" : "section-small has-background-grey"}>
    <div className="container content has-text-white-ter">
        <article>
        {title && 
        <h1 className="title has-text-white-ter">
          {title}
        </h1>
        }
        {subtitle && 
        <h2 className="subtitle has-text-white-ter is-size-5 has-text-weight-normal">{subtitle}</h2>
        }
      </article>
      
    </div>
  </section>
)

Intro.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

export default Intro
