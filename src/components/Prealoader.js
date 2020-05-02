import React from 'react'

const EVENT_NAME = 'PATACONF'

const Preloader = () => (
  <div className="preloader">
    <div className="cp-preloader cp-preloader_type2">
      <div className="spinner" />
      {
        Array.from(EVENT_NAME).map((letter, idx) => (
          <span
            key={idx}
            className="cp-preloader__letter"
            data-preloader={letter}
          >
            {letter}
          </span>
        ))
      }
    </div>
  </div>
)

export default Preloader
