import styled, { css } from 'styled-components'

export default styled.div`
  position: fixed;
  display: none;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.7);
  overflow: hidden;

  ${p => p.open && css`
    display: block;
  `}
`
