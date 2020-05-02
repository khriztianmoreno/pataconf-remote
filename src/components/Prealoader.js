import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Container = styled.div(
  ({ isShow }) => css`
    opacity: 1;
    visibility: ${isShow ? 'unset' : 'hidden'};

    ${
      isShow
      ? css`
        opacity: 1;
        transition: opacity 0.3s, visibility 0.9s linear 0.3s;
      ` : css`
        opacity: 0;
        transition: opacity 0.3s, visibility 0.9s linear 0.3s;
      `
    }
  `
)

const EVENT_NAME = 'PATACONF'

const Preloader = () => {
  // const [isShow, setShow] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false)
  //   }, 1400);
  // }, [])

  return (
    <Container className="preloader" >
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
    </Container>
  )
}

export default Preloader
