import React from 'react'

const SingleImage = ({ imageUrl, styleGallery, width, height }) => {
  const { width: widthdiv, top, left } = {...styleGallery}
  return (
    <div className="cbp-item" style={{ width: widthdiv, top, left }}>
      <div className="cbp-caption">
        <div className="cbp-caption-defaultWrap">
          <img src={`assets/img/gallery/${imageUrl}`} width={width} height={height}  alt="Event" />
        </div>
        <div className="cbp-caption-activeWrap">
          <div className="cbp-l-caption-alignCenter">
            <div className="cbp-l-caption-body">
              <a href={`assets/img/gallery/${imageUrl}`}
                className="cbp-lightbox" data-title="Event Photos">
                  <i className="flaticon-zoom-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}
export default SingleImage
