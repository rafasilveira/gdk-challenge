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

    .buttons {
      a {
        padding: 0.5rem 1rem;
        background: #fff;
        color: #7777ff;
        border: 2px solid #7777ff;
        transition: all 0.25s;

        font-weight: 300;
        letter-spacing: 0.1em;
        text-transform: lowercase;
        border-radius: 4px;

        &:hover {
          background: #7777ff;
          color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
        }

        & + a {
          margin-left: 0.5rem;
        }
      }
    }
  }
`
