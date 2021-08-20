import styled from 'styled-components'

export const TableStyled = styled.div`
  .header,
  .body .row {
    display: grid;
    grid-template-columns: 0.5fr 2fr 2fr 1fr 5fr;
    gap: 2px;

    & > div {
      padding: 0.5rem 0.5rem;
    }
  }

  .header {
    background: #7777ff;
    margin-bottom: 0.5rem;
    & > div {
      color: #fff;
    }
  }

  .header,
  .body {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    overflow: hidden;
  }

  .row {
    background: #f1f1f1;
    transition: all 0.25s;
    cursor: pointer;

    & + .row {
      /* margin-top: .25rem; */
      background: #fff;
    }

    &:hover {
      background: #7777ff55;
    }
  }
`
