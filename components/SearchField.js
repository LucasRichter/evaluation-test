import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import { Box } from '@rebass/grid'
import { Search } from 'react-feather'

const SearchField = ({ onSearch, placeholder }) => {
  const [value, setValue] = useState('')
  return (
    <Box
      as='form'
      onSubmit={e => {
        e.preventDefault()
        onSearch(value)
      }}
      css={{ position: 'relative' }}
      width='100%'
    >
      <Box
        css={{
          position: 'absolute',
          top: '15px',
          left: '17px',
          zIndex: 1
        }}
      >
        <Search color='#4f5b66' />
      </Box>
      <Input
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </Box>
  )
}

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

SearchField.defaultProps = {
  placeholder: 'Search...'
}

export default SearchField
