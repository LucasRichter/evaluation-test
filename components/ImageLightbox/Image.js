import styled, { css } from 'styled-components'

export default styled.img`
  height: 100vh;
  max-width: 100%;

  ${p => p.loading && css`
    display: none;
  `}
`
