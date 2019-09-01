import styled, { css } from 'styled-components'

export default styled.div`
  position: fixed;
  opacity: 0;
  transform: scale(0);
  z-index: 1;
  pointer-events: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.7);
  overflow: hidden;
  transition: all .125s ease-in-out;

  ${p => p.open && css`
    opacity: 1;
    transform: scale(1);
    pointer-events: all;
  `}
`
