// pages/_app.js
import React from 'react'
import App from 'next/app'
import Reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import axios from 'axios'
import { Box } from '@rebass/grid'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from '../store'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

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
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Box mx={['20px', '90px']}>
          <Component {...pageProps} />
        </Box>
      </Provider>
    )
  }
}

MyApp.propTypes = {
  store: PropTypes.object.isRequired
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {pageProps}
}

export default withRedux(configureStore)(withReduxSaga(MyApp))
