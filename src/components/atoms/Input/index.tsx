import React, { useState } from 'react'
import * as S from './styles'

interface InputProps {
  labelName: string
  type?: string
}

export function Input({ labelName, type = 'text' }: InputProps) {
  const [value, setValue] = useState('')

  return (
    <S.InputWrapper>
      <S.StyledInput
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
      />
      <S.Label>{labelName}</S.Label>
    </S.InputWrapper>
  )
}
