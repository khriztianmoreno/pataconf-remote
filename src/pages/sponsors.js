import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import BecomeSponsor from '../components/BecomeSponsor'
import SEO from "../components/seo"
import { useStaticQuery, graphql } from 'gatsby'
import SingleSpeaker from '../components/SingleSpeaker'

const ALL_SPONSORS_QUERY = graphql`
  query {
    allSponsorsJson {
      edges {
        node {
          name
          title
          facebook
          id
          imageUrl
          instagram
          linkedin
          twitter
        }
      }
    }
  }
`


const SponsorPage = () => {
  const { allSponsorsJson } = useStaticQuery(ALL_SPONSORS_QUERY)
  const { edges: sponsors = [] } = allSponsorsJson

  return (
  <Layout>
    <SEO title="Sponsor" />
    <section id="hero-section" className="hero-innar">
        <div className="container">
            <div className="hero-wrap">
                <h1>Quiero Patrocinar</h1>
                <ul className="list-inline">
                    <li className="list-inline-item"><Link to="/">Inicio /</Link></li>
                    <li className="list-inline-item color-yellow">Quiero Patrocinar</li>
                </ul>
            </div>
        </div>
    </section>
    <BecomeSponsor/>
    <section id="speaker-section" className="pt-100 speaker-layout">
        <div className="container-fluid">
          <div className="section-intro text-center mr-bottom-70">
            <h2>Nuestros Patrocinadores</h2>
            <hr className="ev-line ev-line-c1" />
          </div>

          <div className="speaker-wrap">
            <div className="row justify-content-md-center">
              {
                sponsors.map(({ node: sponsor }) => (
                  <SingleSpeaker key={sponsor.id} {...sponsor} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
  </Layout>
)
}

export default SponsorPage
