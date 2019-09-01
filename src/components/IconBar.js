import React from 'react'
import thumb from '../img/thumb-up.svg'
import verified from '../img/verified.svg'
import versatile from '../img/versatile.svg'
import compass from '../img/baseline-explore-24px.svg'

export const IconBar = () => {
 
  return (
    <section id="intro" className="section has-background-grey-light">
      <div className="columns is-mobile is-multiline has-text-centered">
        <div className="column is-half-mobile">
          <span className="icon is-large">
            <img src={thumb} alt="Reputable" />
          </span>
          <p className="subtitle has-text-weight-bold">Reputable</p>
        </div>
        <div className="column is-half-mobile">
          <span className="icon is-large">
            <img src={versatile} alt="Superior Service" />
          </span>
          <p className="subtitle has-text-weight-bold">Versatile</p>
        </div>
        <div className="column is-half-mobile">
          <span className="icon is-large">
            <img src={verified} alt="Results Driven" />
          </span>
          <p className="subtitle has-text-weight-bold">Proven</p>
        </div>
        <div className="column is-half-mobile">
          <span className="icon is-large">
            <img src={compass} alt="Nationwide" />
          </span>
          <p className="subtitle has-text-weight-bold">Nationwide</p>
        </div>
      </div>
    </section>
  )
}

export default IconBar
