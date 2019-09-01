import React from 'react'
import SearchField from '../components/SearchField'
import { Flex, Box } from '@rebass/grid'
import Title from '../components/Title'
import PageHead from '../components/PageHead'
import Router from 'next/router'

const index = () => {
  const onSearch = value => {
    if (!value) return
    Router.push(`/search?search=${value}`)
  }

  return (
    <main>
      <PageHead
        title='Search best Gifs'
      />
      <Flex
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        css={{
          height: '100vh'
        }}
      >
        <Title>Search best Gifs in the Web</Title>
        <Box width={['100%', '450px']} my={['20px', '40px']}>
          <SearchField onSearch={onSearch} />
        </Box>
      </Flex>
    </main>
  )
}

export default index
