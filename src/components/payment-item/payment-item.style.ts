import styled from 'styled-components'

export const PaymentItemStyled = styled.div`
  flex: 0 0 calc(50% - 0.5rem);

  padding: 0.5rem 1rem;
  border-left: 2px solid #7777ff;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
  border-radius: 4px;

  label {
    font-weight: 700;
  }
  p {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  && {
    margin-top: 1rem;
  }

  &:last-child {
    flex-grow: 1;
  }
`
