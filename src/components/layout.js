import React from "react"
import PropTypes from "prop-types"

import Preloader from './Prealoader'
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <a href="/" id="top-button">
        <i className="fas fa-chevron-up"></i>
      </a>
      <Preloader />
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
