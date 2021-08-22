import styled from 'styled-components'

export const TableStyled = styled.div`
  overflow-x: auto;
  .header,
  .body .row {
    display: grid;
    grid-template-columns: 250px 180px 180px 90px 1fr;
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
    min-width: 800px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  }

  .row {
    background: #f1f1f1;
    transition: all 0.25s;
    cursor: pointer;

    &:nth-child(even) {
      background: #fff;
    }

    &:hover {
      background: #7777ff55;
    }
  }
`
