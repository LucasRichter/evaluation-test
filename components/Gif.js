import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'
import generateRandomColor from '../utils/generateRandomColor'
import TrackVisibility from 'react-on-screen'

const Gif = ({ sizes, title, onClick, originalSize }) => {
  return (
    <TrackVisibility
      style={{
        height: `${sizes[originalSize].height}px`,
        width: `${sizes[originalSize].width}px`,
        background: generateRandomColor(),
        cursor: 'pointer',
        position: 'relative'
      }}
      partialVisibility
    >
      {({ isVisible }) => isVisible &&
        <Box
          onClick={onClick}
          src={sizes[originalSize].url}
          alt={title}
          as='img'
        />}
    </TrackVisibility>
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
