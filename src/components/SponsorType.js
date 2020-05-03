import React from 'react'

const SponsorType = ({name, description, icon, color}) => (
  <div class="col-md-6">
      <div class="info-wrap shadow__depth1 match-height">
          <div class="info-wrap-inner">
              <div class="icon">
                  <i class={`${icon} ${color}`}></i>
              </div>
              <h4>{name}</h4>
              <p>{description}</p>
          </div>
      </div>
  </div>
)

export default SponsorType
