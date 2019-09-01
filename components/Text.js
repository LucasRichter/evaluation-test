import styled, { css } from 'styled-components'

const Text = styled.p`
  color: ${p => p.color};
  font-family: 'Work Sans';
  font-size: ${p => p['fontSize'] || '15px'};

  ${({ bold }) => bold && css`
    font-weight: bold;
  `}

  ${({ normal }) => normal && css`
    font-weight: lighter;
  `}
`

export default Text
