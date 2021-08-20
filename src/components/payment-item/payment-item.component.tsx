import React, { CSSProperties, FC } from 'react'
import { PaymentItemStyled } from './payment-item.style'

export const PaymentItem: FC<{
  label: string
}> = ({ label, children }) => (
  <PaymentItemStyled>
    <span>{label}</span>
    {children}
  </PaymentItemStyled>
)
