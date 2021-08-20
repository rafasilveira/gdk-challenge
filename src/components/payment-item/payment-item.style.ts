import styled from 'styled-components'

export const PaymentItemStyled = styled.div`
  flex: 0 0 calc(50% - 0.5rem);

  padding: 0.5rem 1rem;
  border-left: 2px solid #7777ff;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  margin-bottom: 1rem;

  & > span {
    font-weight: 700;
    margin-bottom: .5rem;
    display: block;
  }

  &:last-child {
    flex-grow: 1;
  }
`
