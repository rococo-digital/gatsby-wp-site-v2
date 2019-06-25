import React from 'react'
import Helmet from 'react-helmet'
import MainMenu from './MainMenu'
import Footer from './Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <MainMenu />

    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
