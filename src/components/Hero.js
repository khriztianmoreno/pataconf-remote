import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BK_IMAGE_QUERY = graphql`
  query {
    desktop: file(relativePath: { eq: "slider-home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = (props) => {
  const data = useStaticQuery(BK_IMAGE_QUERY)
  const imageData = data.desktop.childImageSharp.fluid

  const className = 'hero-layout-two'
  return (
    <BackgroundImage
      id="hero-section"
      Tag="section"
      className={className}
      fluid={imageData}
    >
      <div className="container">
        <div className="hero-wrap">
          <div className="hero-con-wrap">
            <h1>
              Conferencia de <br />
              comunidades 2020.
            </h1>
            <p><span>06</span> Junio, 2020 OnLine</p>
            <div id="timer" className="d-block clearfix">
              <div id="days" className="color-red"></div>
              <div id="hours" className="color-yellow"></div>
              <div id="minutes" className="color-green"></div>
              <div id="seconds" className="color-blue"></div>
            </div>
            <a className="btn ev-btn mr-top-50 clearfix" href="/">Consigue tu ticket</a>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
