import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const SponsorHero = () => {
  const BK_IMAGE_QUERY = graphql`
    query {
      desktop: file(relativePath: { eq: "slider-sponsor.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `
  const data = useStaticQuery(BK_IMAGE_QUERY)
  const imageData = data.desktop.childImageSharp.fluid

  const className = 'hero-innar'
  return (
    <BackgroundImage
      id="hero-section"
      Tag="section"
      className={className}
      fluid={imageData}
    >
      <div className="container">
        <div className="container">
          <div className="hero-wrap">
          <h1>Quiero Patrocinar</h1>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/">Inicio /</Link>
              </li>
              <li className="list-inline-item color-yellow">Quiero Patrocinar</li>
            </ul>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default SponsorHero
