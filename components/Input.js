import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  height: 50px;
  background: #2b303b;
  border: none;
  font-size: 10px;
  color: #63717f;
  padding-left: 45px;
  border-radius: 5px;
  transition: background .55s ease;

  &::-webkit-input-placeholder {
    color: #65737e;
  }

  &:hover,
  &:active,
  &:focus {
    outline:none;
    background: #fff;
  }
`

export default Input
