import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ title, subtitle }) => (
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                {title}
                </h1>
                <h2 class="subtitle">
                {subtitle}
                </h2>
            </div>
        </div>
  </section>
)

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

export default Hero
