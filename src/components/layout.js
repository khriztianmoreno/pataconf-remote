import React from "react"
import PropTypes from "prop-types"

import Preloader from './Prealoader'
import Header from "./Header"
import Footer from "./Footer"

const Layout = (props) => {
  const { children, headerAlternative, footerAlternative } = props
  return (
    <>
      <a href="/" id="top-button">
        <i className="fas fa-chevron-up"></i>
      </a>
      <Preloader />
      <Header isAlternative={headerAlternative} />
      {children}
      <Footer isAlternative={footerAlternative} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footerAlternative: PropTypes.bool,
  headerAlternative:PropTypes.bool
}

Layout.defaultProps = {
  footerAlternative: false,
  headerAlternative: false,
}

export default Layout
