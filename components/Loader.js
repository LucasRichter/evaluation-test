import styled, { keyframes } from 'styled-components'
import React from 'react'

const loaderInner = keyframes`
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
`

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Square = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid black;
  top: 50%;
  animation: ${loader} 2s infinite ease;
`

const SquareInner = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: black;
  animation: ${loaderInner} 2s infinite ease-in;
`

const Loader = () =>
  <Square>
    <SquareInner />
  </Square>

export default Loader
