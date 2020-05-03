import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BecomeSponsor from '../components/BecomeSponsor'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SingleSpeaker from '../components/SingleSpeaker'
import SponsorHero from '../components/SponsorHero'

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
  <Layout footerAlternative>
    <SEO title="Sponsor" />
    <SponsorHero />
    <BecomeSponsor/>
    <section id="speaker-section-two" className="pa-100 speaker-layout speaker-layout-two">
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
