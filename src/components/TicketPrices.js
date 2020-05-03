import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BK_IMAGE_QUERY = graphql`
  query {
    desktop: file(relativePath: { eq: "bg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const TicketPrices = () => {
  const data = useStaticQuery(BK_IMAGE_QUERY)
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      id="price-section"
      Tag="section"
      fluid={imageData}
    >
      <div className="price-bg pa-100">
        <div className="container">

          <div className="section-intro text-center mr-bottom-70">
            <h2 className="text-white">Precio de entrada</h2>
            <p className="sub-title text-white">Reserve su asiento hoy y Disfruta</p>
            <hr className="ev-line ev-line-c2" />
          </div>

          <div className="price-wrap">
            <div className="row justify-content-md-center">
              <div className="col-md-5">
                <div className="single-price bg-white p-5 match-height">
                  <span className="lable">Donanción</span>
                  <p className="price-title">Apoya a una fundación</p>
                  <h3>$5 <sub>/ Una persona</sub></h3>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                    necessary, making this the first true generator on the Internet.</p>
                  <a href="/" className="btn ev-btn-medium mt-3">Buy Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </BackgroundImage>
  )
}

export default TicketPrices
