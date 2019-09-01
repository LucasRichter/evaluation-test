import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Background from './Background'
import Content from './Content'
import { X, ChevronRight, ChevronLeft } from 'react-feather'
import { Box, Flex } from '@rebass/grid'
import Arrow from './Arrow'
import Image from './Image'
import Loader from '../Loader'
import useKeyPress from '../../hooks/useKeyPress'

const Lightbox = ({ disablePrev, open, image, onNext, onPrev, onClose }) => {
  const [loading, setLoading] = useState(undefined)
  const onClick = func => e => {
    if (!open) return
    e && e.stopPropagation()
    func()
  }

  const nextFunc = e => {
    onClick(e)
    onNext()
  }

  const prevFunc = e => {
    onClick(e)
    onPrev()
  }

  const closeFunc = e => {
    onClick(e)
    onClose()
  }

  useEffect(() => {
    useKeyPress('Escape', closeFunc)
    useKeyPress('ArrowRight', nextFunc)
    useKeyPress('ArrowLeft', prevFunc)
  }, [])

  useEffect(() => {
    setLoading(true)
  }, [image])

  return (
    <Background
      open={open}
      onClick={closeFunc}
    >
      <Box
        onClick={closeFunc}
        css={{
          position: 'absolute',
          top: 10,
          cursor: 'pointer',
          right: 25,
          ':hover': {
            color: '#999'
          }
        }}
      >
        <X
          color='white'
          size={35}
        />
      </Box>
      <Content>
        <Arrow
          onClick={nextFunc}
          next
        >
          <ChevronRight size={80} />
        </Arrow>
        {!disablePrev &&
          <Arrow
            onClick={prevFunc}
          >
            <ChevronLeft size={80} />
          </Arrow>}

        {loading &&
          <Flex
            alignItems='center'
            justifyContent='center'
            css={{
              height: '100vh'
            }}
          >
            <Loader />
          </Flex>}
        <Image
          loading={loading ? true : undefined}
          onLoad={() => setLoading(false)}
          src={image.url}
        />
      </Content>
    </Background>
  )
}

Lightbox.propTypes = {
  open: PropTypes.bool,
  image: PropTypes.object,
  disablePrev: PropTypes.bool,
  onNext: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
}

Lightbox.defaultProps = {
  image: {}
}

export default Lightbox
