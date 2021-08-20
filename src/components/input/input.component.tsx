import React, { FC } from 'react'
import { InputStyled } from './input.style'

export interface IInputProps {
  label: string
  placeholder?: string
  fieldType?: 'text' | 'number'
  value: string | number
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  children?: never
}

export const Input: FC<IInputProps> = ({
  label,
  placeholder = label,
  fieldType = 'text',
  value,
  handleChange
}) => {
  return (
    <InputStyled>
      {label}
      <input
        type={fieldType}
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </InputStyled>
  )
}
