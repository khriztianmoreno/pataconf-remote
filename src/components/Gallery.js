import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SingleImage from './SingleImage'

const ALL_IMAGES_QUERY = graphql`
  query {
    allImagesJson {
      edges {
        node {
          id,
          imageUrl,
          width,
          height,
          styleGallery {
            width,
            left,
            top
          }
        }
      }
    }
  }
`

const Gallery = () => {
  const { allImagesJson } = useStaticQuery(ALL_IMAGES_QUERY)
  const { edges: images = [] } = allImagesJson
  return (
    <section id="gallery-section" className="pa-100 pb-0">
      <div className="container-fluid p-0">
        <div className="section-intro text-center mr-bottom-70">
          <h2>Galería</h2>
          <p className="sub-title color-gray">Momentos de eventos capturados</p>
          <hr className="ev-line ev-line-c5" />
        </div>

        <div id="js-grid-masonry" className="cbp">
          {
            images.map(({ node: image }) => (
              <SingleImage  key={image.id}  {...image} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Gallery
