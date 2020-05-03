import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header id="top-nav" className="unveiled-navigation nav-layout-three">
    <div className="container">
      <nav id="ev-nav" className="navigation">
        <div className="nav-header">
          <Link className="nav-brand non-sticky" to="/">
            <img src="pataconf-logo.png" alt="Evenum" data-rjs="3" width="152" />
          </Link>
          <Link className="nav-brand sticky" to="/">
            <img src="pataconf-logo-sticky.png" alt="Evenum" data-rjs="3" width="152" />
          </Link>
          <div className="nav-toggle" />
        </div>

        <div className="nav-menus-wrapper">
          <span className="nav-menus-wrapper-close-button">✕</span>
          <ul className="nav-menu align-to-right">
            <li className="active"><Link to="/">Inicio</Link></li>
            <li><Link to="/sponsors">Quiero Patrocinar</Link></li>
            <li className="hide-mobile">
              <Link to="/" className="open-offcanvas">
                <i className="flaticon-menu"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
)

export default Header
