import React from 'react'

const Hero = () => (
  <section id="hero-section" className="hero-layout-two">
    <div className="container">
      <div className="hero-wrap">
        <div className="hero-con-wrap">
          <h1>
            Developer <br />
            Conference 2020.
          </h1>
          <p><span>06</span> Junio, 2020 OnLine</p>
          <div id="timer" className="d-block clearfix">
            <div id="days" className="color-red"></div>
            <div id="hours" className="color-yellow"></div>
            <div id="minutes" className="color-green"></div>
            <div id="seconds" className="color-blue"></div>
          </div>
          <a className="btn ev-btn mr-top-50 clearfix" href="/">Buy Ticket</a>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
