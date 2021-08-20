import React, { CSSProperties, FC } from 'react'
import { PaymentItemStyled } from './payment-item.style'

export const PaymentItem: FC<{
  label: string
  text: string
  children?: never
}> = ({ label, text }) => (
  <PaymentItemStyled>
    <label>{label}</label>
    <p>{text}</p>
  </PaymentItemStyled>
)
