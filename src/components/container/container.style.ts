import styled from 'styled-components'

export const ContainerStyled = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
  @media only screen and (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: unset;
  }
`
