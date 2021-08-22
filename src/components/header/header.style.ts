import styled from 'styled-components'

export const HeaderStyled = styled.header`
  margin: 0 auto 3.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125), 0 5px 15px rgba(0, 0, 0, 0.025);
  background: #fff;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;

    h1 {
      font-size: 2rem;
      color: #7777ff;
      font-weight: 600;
      letter-spacing: 0.02em;
    }
  }

  @media only screen and (max-width: 1000px) {
    margin: 0 auto 1rem;
    .content {
      padding: 0.5rem 0;
      flex-direction: column;
      h1 {
        font-size: 1.25rem;
      }
      .buttons {
        display: none;
      }
    }
  }
`
