import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Gif from './Gif'
import { connect } from 'react-redux'
import MasonryLayout from 'react-masonry-layout'
import Loader from './Loader'
import { loadGifs } from '../store/gifs/actions'
import { Flex } from '@rebass/grid'
import Lightbox from './ImageLightbox'

const GifsList = ({ images, loading, total, offset, loadGifs }) => {
  const [currentIndex, setCurrentIndex] = useState(undefined)
  const [image, setImage] = useState({})
  const [open, setOpen] = useState(false)

  const onOpen = index => {
    setOpen(true)
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (images.length === 0) return

    if (currentIndex > images.length) {
      loadGifs()
    }

    if (currentIndex < 0) {
      setCurrentIndex(0)
    } else {
      setImage(getImage(currentIndex))
    }
  }, [currentIndex])

  const getImage = index => index !== undefined && ({
    title: images[index].title,
    ...images[index].sizes.original
  })

  const onClose = () => {
    setOpen(false)
    setImage({})
  }

  const onPrev = () => setCurrentIndex(value => value > 0 ? value - 1 : value)
  const onNext = () => setCurrentIndex(value => value + 1)

  return (
    <Fragment>
      <MasonryLayout
        id='masonry-layout'
        infiniteScroll={loadGifs}
        infiniteScrollLoading={loading}
        infiniteScrollEnd={offset > total}
        infiniteScrollEndIndicator={<div />}
        infiniteScrollSpinner={
          <Flex my='20px' alignItems='center' justifyContent='center'>
            <Loader />
          </Flex>
        }
      >
        {images.map((gif, index) =>
          <Gif
            onClick={() => onOpen(index)}
            key={gif.id}
            {...gif}
          />
        )}
      </MasonryLayout>
      <Lightbox
        open={open}
        disablePrev={currentIndex === 0}
        onPrev={onPrev}
        onNext={onNext}
        onClose={onClose}
        image={loading ? {} : image}
      />
    </Fragment>
  )
}

GifsList.propTypes = {
  loadGifs: PropTypes.func,
  offset: PropTypes.number,
  total: PropTypes.number,
  loading: PropTypes.bool,
  images: PropTypes.array
}

GifsList.defaultProps = {
  images: [{}]
}

const mapStateToProps = (state) => ({
  ...state.gifs
})

const mapDispatchToProps = {
  loadGifs
}

export default connect(mapStateToProps, mapDispatchToProps)(GifsList)
