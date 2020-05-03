import React from 'react'
import { Link } from "gatsby"

const Footer = () => {
  return (
    <section id="footer-section" className="pa-100 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="ev-widget-wrap">
              <img src="/pataconf-logo-sticky.png" alt="logo" className="img-fluid mb-4" data-rjs="3" width="152" />
              <ul className="social mt-4">
                <li><a href="//twitter.com/colombia_dev"><i className="fab fa-twitter"></i></a></li>
                <li><a href="//twitter.com/colombia_dev"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="ev-widget-wrap">
              <h5 className="ev-widget-title mb-4">Quick Links</h5>
              <ul>
                <li><Link to="/">Organizers</Link></li>
                <li><Link to="/">Call for Volunteer</Link></li>
                <li><Link to="/">Schedule</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="ev-widget-wrap">
              <h5 className="ev-widget-title mb-4">Information</h5>
              <ul>
                <li><Link to="/">Call for Speakers</Link></li>
                <li><Link to="/">Sponsors Details</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center mt-5">
          <p>&copy; {new Date().getFullYear()}, colombia-dev</p>
        </div>

      </div>
    </section>
  )
}

export default Footer
