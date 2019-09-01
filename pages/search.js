import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import PageHead from '../components/PageHead'
import GifsList from '../components/GifsList'
import { Box } from '@rebass/grid'
import { setType, setSearch } from '../store/gifs/actions'
import { connect } from 'react-redux'
import Text from '../components/Text'
import SearchField from '../components/SearchField'
import Router from 'next/router'
import formatNumber from '../utils/formatNumber'

const search = ({ setType, setSearch, search, total }) => {
  useEffect(() => {
    const effect = () => {
      setSearch(search)
      setType('search')
    }
    effect()
  }, [search])
  return (
    <main>
      <PageHead
        title={`Search | ${search}`}
      />

      <Box my='30px'>
        <SearchField onSearch={value => {
          if (!value) return
          Router.push(`/search?search=${value}`)
        }}
        />
      </Box>

      <Box my='30px'>
        <Text bold fontSize='25px' as='h2'>
          {search} <Text normal as='span'>{formatNumber(total)} gifs</Text>
        </Text>
      </Box>

      <Box my='30px'>
        <GifsList />
      </Box>
    </main>
  )
}

const mapStateToProps = state => ({
  total: state.gifs.total
})

const mapDispatchToProps = {
  setType,
  setSearch
}

search.propTypes = {
  setType: PropTypes.func,
  setSearch: PropTypes.func,
  total: PropTypes.number,
  search: PropTypes.string
}

search.getInitialProps = async ({ query: { search } }) => {
  return { search }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(search)
