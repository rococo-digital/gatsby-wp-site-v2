import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import MainMenu from './MainMenu'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <MainMenu />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
