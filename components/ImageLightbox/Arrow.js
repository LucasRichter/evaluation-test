import styled, { css } from 'styled-components'

export default styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 10px;
  color: white;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${p => p.next && css`
    right: 0;
    border-radius: 3px 0 0 3px;
  `}
`
