import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="top-nav" className="unveiled-navigation nav-layout-three">
    <div className="container">
      <nav id="ev-nav" className="navigation">
        <div className="nav-header">
          <a className="nav-brand non-sticky" href="index.html">
            <img src="pataconf-logo.png" alt="Evenum" data-rjs="3" width="152" />
          </a>
          <a className="nav-brand sticky" href="index.html">
            <img src="assets/img/logo-sticky.png" alt="Evenum" data-rjs="3"/>
          </a>
          <div className="nav-toggle" />
        </div>

        <div className="nav-menus-wrapper">
          <span className="nav-menus-wrapper-close-button">✕</span>
          <ul className="nav-menu align-to-right">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="speaker.html">Speaker</a></li>
            <li><a href="/">Schedule</a> </li>
            <li><a href="sponsor.html">Become A Sponsor</a></li>
            <li className="hide-mobile">
              <a href="#" className="open-offcanvas"><i className="flaticon-menu"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
