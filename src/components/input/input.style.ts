import styled from 'styled-components'

export const InputStyled = styled.label`
  font-size: 1rem;
  font-weight: 400;

  input {
    padding: 0.5rem;
    background: #f1f1f1;
    font-size: 1.15rem;
    border: none;
    border-left: 2px solid #f1f1f1;
    display: block;
    width: 100%;
    margin-top: .5rem;
    outline: none;
    border-radius: 2px;
    transition: all .25s;
    &:focus {
      border-color: #7777ff;
    }
  }

  margin: 1rem 0;
  display: block;
`
