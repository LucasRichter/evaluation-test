import React from 'react'
import PropTypes from 'prop-types'
import Gif from './Gif'
import { connect } from 'react-redux'
import MasonryLayout from 'react-masonry-layout'
import Loader from './Loader'
import { loadGifs } from '../store/gifs/actions'
import { Flex } from '@rebass/grid'

const GifsList = ({ images, loading, total, offset, loadGifs }) => {
  return (
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
      {images.map(gif =>
        <Gif
          key={gif.id}
          {...gif}
        />
      )}
    </MasonryLayout>
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
  images: []
}

const mapStateToProps = (state) => ({
  ...state.gifs
})

const mapDispatchToProps = {
  loadGifs
}

export default connect(mapStateToProps, mapDispatchToProps)(GifsList)
