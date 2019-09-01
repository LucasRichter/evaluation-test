import styled, { keyframes } from 'styled-components'
import React from 'react'

const bounce = keyframes`
  0%, 75%, 100%{
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25%{
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
`

const Container = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
`

const Circle = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #3498db;
  margin: 35px 5px;
  animation: ${bounce} 1s ease-in-out infinite ${p => p.delay};
`

const Loader = () =>
  <Container>
    <Circle />
    <Circle delay='0.33s' />
    <Circle delay='0.66s' />
  </Container>

export default Loader
