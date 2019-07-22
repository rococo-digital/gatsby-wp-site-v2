import React from 'react'
import business from '../img/baseline-location_city-24px.svg'
import gavel from '../img/baseline-gavel-24px.svg'
import court from '../img/baseline-account_balance-24px.svg'
import compass from '../img/baseline-explore-24px.svg'

export const IconBar = () => {
 
  return (
    <section id="intro" className="section has-background-grey-light">
      <div className="columns is-mobile is-multiline has-text-centered">
        <div className="column is-half-mobile">
          <span className="icon is-large">
            <img src={business} alt="Reputable" />
          </span>
          <p className="subtitle has-text-weight-bold">Reputable</p>
        </div>
        <div className="column is-half-mobile">
          <span className="icon is-large">
            <img src={court} alt="Superior Service" />
          </span>
          <p className="subtitle has-text-weight-bold">Service</p>
        </div>
        <div className="column is-half-mobile">
          <span className="icon is-large">
            <img src={gavel} alt="Results Driven" />
          </span>
          <p className="subtitle has-text-weight-bold">Results driven</p>
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
