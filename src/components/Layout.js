import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import MainMenu from './MainMenu'
import Footer from './Footer'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <MainMenu />

    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
