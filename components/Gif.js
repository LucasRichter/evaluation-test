import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'
import generateRandomColor from '../utils/generateRandomColor'
import TrackVisibility from 'react-on-screen'
import styled from 'styled-components'

const Container = styled(TrackVisibility)`
  height: ${p => p.height}px;
  width: ${p => p.width}px;
  background: ${p => p.bg};
  cursor: pointer;
  position: relative;
  transition: opacity .125s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`

const Gif = ({ sizes, title, onClick, originalSize }) => {
  return (
    <Container
      bg={generateRandomColor()}
      height={sizes[originalSize].height}
      width={sizes[originalSize].width}
      partialVisibility
    >
      {({ isVisible }) => isVisible &&
        <Box
          onClick={onClick}
          src={sizes[originalSize].url}
          alt={title}
          as='img'
        />}
    </Container>
  )
}

Gif.propTypes = {
  sizes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  originalSize: PropTypes.string
}

Gif.defaultProps = {
  originalSize: 'preview'
}

export default Gif
