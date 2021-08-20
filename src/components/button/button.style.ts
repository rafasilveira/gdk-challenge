import styled from 'styled-components'

export const ButtonStyled = styled.a`
  padding: 0.5rem 1rem;
  background: #fff;
  color: #7777ff;
  border: 2px solid #7777ff;
  transition: all 0.25s;

  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: lowercase;
  border-radius: 4px;

  display: inline-block;
  cursor: pointer;

  &:hover {
    background: #7777ff;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
  }

  & + & {
    margin-left: 0.5rem;
  }
`
