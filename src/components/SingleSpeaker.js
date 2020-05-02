import React from 'react'
import PropTypes from "prop-types"

const SingleSpeaker = (props) => {
  const {
    facebook,
    imageUrl,
    instagram,
    linkedin,
    name,
    title,
    twitter,
  } = props

  return (
    <div className="col-md-3 p-0">
      <div className="single-speaker">
        <div className="sp-hover text-center d-flex flex-column justify-content-center align-items-center">
          <h6>{name}</h6>
          <p>{title}</p>

          <div className="social">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                  </a>
              </li>
              <li className="list-inline-item">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="speaker-image">
          <img src={imageUrl} alt="speaker" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

SingleSpeaker.defaultProps = {
  facebook: 'https://facebook.com',
  imageUrl: 'https://via.placeholder.com/480x580/eee/ddd',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  name: 'John Doah',
  title: 'Developer Evangelist',
  twitter: 'https://twitter.com',
}

SingleSpeaker.propTypes = {
  facebook: PropTypes.string,
  imageUrl: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  twitter: PropTypes.string,
}

export default SingleSpeaker
