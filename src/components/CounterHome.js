import React from 'react'

const CounterHome = () => (
  <section id="counter-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="count-wrap shadow__depth2 text-center match-height" data-tilt>
            <div className="count-wrap-inner">
              <div className="icon">
                <i className="flaticon-microphone color-yellow"></i>
              </div>
              <h2><span className="counter">15</span></h2>
              <h6>Speakers geniales</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="count-wrap shadow__depth2 text-center match-height" data-tilt>
            <div className="count-wrap-inner">
              <div className="icon">
                <i className="flaticon-office-chair light-purple"></i>
              </div>
              <h2><span className="counter">250</span> +</h2>
              <h6>Asistentes totales</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="count-wrap shadow__depth2 text-center match-height" data-tilt>
            <div className="count-wrap-inner">
              <div className="icon">
                <i className="flaticon-idea color-green"></i>
              </div>
              <h2><span className="counter">15</span> +</h2>
              <h6>Temas totales</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CounterHome
