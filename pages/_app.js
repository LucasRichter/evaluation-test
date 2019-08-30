// pages/_app.js
import React from 'react'
import App, { Container } from 'next/app'
import Reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import axios from 'axios'
import { Box } from '@rebass/grid'

axios.defaults.baseURL = process.env.API_DOMAIN

const GlobalStyle = createGlobalStyle`
  ${Reset}

  * {
    line-height: 1.6 !important;
  }


  #__next {
    margin: auto;
    max-width: 1500px;
  }

  html {
    height: 100%;
    width: 100%;
  }

  /* other styles */

`

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Box mx='100px'>
          <Component {...pageProps} />
        </Box>
      </Container>
    )
  }
}

export default MyApp
