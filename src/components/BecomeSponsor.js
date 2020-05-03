import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SponsorType  from './SponsorType'

const ALL_SPONSOR_TYPES_QUERY = graphql`
  query {
    allSponsorsTypeJson {
      edges {
        node {
          id,
          name,
          description,
          icon,
          color,
        }
      }
    }
  }
`

const BecomeSponsor = () => {
  const { allSponsorsTypeJson } = useStaticQuery(ALL_SPONSOR_TYPES_QUERY)
  const { edges: types = [] } = allSponsorsTypeJson
  return (
    <section id="info-section" className="pa-100 bg-white">
      <div className="container">
          <div className="row sponsor-items">
          {
              types.map(({ node: type }) => (
                <SponsorType  key={type.id}  {...type} />
              ))
            }
          </div>
          <div className="text-center">
              <a className="btn ev-btn-line mr-top-40" href="mailto:mafesernaarboleda@gmail.com?Subject=Quiero%20ser%20sponsor%20">Quiero Patrocinar</a>
          </div>
      </div>
    </section>
  )
}

export default BecomeSponsor
