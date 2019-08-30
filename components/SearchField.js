import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import { Box } from '@rebass/grid'
import { Search } from 'react-feather'

const SearchField = ({ onSearch }) => {
  const [value, setValue] = useState('')
  return (
    <Box
      as='form'
      onSubmit={() => onSearch(value)}
      css={{ position: 'relative' }}
      width='100%'
    >
      <Box
        mt='15px'
        ml='17px'
        css={{
          position: 'absolute',
          top: '50%',
          zIndex: 1
        }}
      >
        <Search color='#4f5b66' />
      </Box>
      <Input
        onChange={e => setValue(e.target.value)}
        placeholder='Search GIFS..'
      />
    </Box>
  )
}

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchField
