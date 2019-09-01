import Head from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'

const PageHead = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name='theme-color' content='#ffffff' />
    <link href='https://fonts.googleapis.com/css?family=Montserrat|Work+Sans:300,600,700' rel='stylesheet' />
    <meta name='description' content={description} />
    <meta charSet='utf-8' />
    <meta httpEquiv='content-language' content='en' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  </Head>
)

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default PageHead
