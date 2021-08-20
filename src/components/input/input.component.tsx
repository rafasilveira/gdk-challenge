import React, { FC } from 'react'
import { InputStyled } from './input.style'

interface IInputProps {
  label: string
  placeholder?: string
  fieldType?: 'text' | 'number'
  value: string
  handleChange: (newValue: string) => void
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
        onChange={(event) => handleChange(event.target.value)}
      />
    </InputStyled>
  )
}
