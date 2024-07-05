import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  margin: 1rem 0;
  width: 100%;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 13px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
  height: 48px;

  &:focus {
    border-color: #666;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -0.75rem;
    left: 0.5rem;
    font-size: 0.75rem;
    color: #666;
    background: #fff;
    padding: 0 0.25rem;
  }
`

export const Label = styled.label`
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  font-size: 14px;
  color: #999;
  pointer-events: none;
  transition: 0.2s ease all;
  background: transparent;
`
