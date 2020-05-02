import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SingleSpeaker from './SingleSpeaker'

const ALL_SPEAKERS_QUERY = graphql`
  query {
    allSpeakersJson {
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

const Speakers = () => {
  const { allSpeakersJson } = useStaticQuery(ALL_SPEAKERS_QUERY)
  const { edges: speakers = [] } = allSpeakersJson
  return (
    <section id="speaker-section" className="pt-100 speaker-layout">
      <div className="container-fluid">
        <div className="section-intro text-center mr-bottom-70">
          <h2>Nuestros speakers</h2>
          <p className="sub-title color-gray">Los principales speakers de LATAM</p>
          <hr className="ev-line ev-line-c1" />
        </div>

        <div className="speaker-wrap">
          <div className="row justify-content-md-center">
            {
              speakers.map(({ node: speaker }) => (
                <SingleSpeaker key={speaker.id} {...speaker} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speakers
