import styled from 'styled-components'
import { Button } from '../atoms/Button'
import Link from 'next/link'

interface MenuButtonProps {
  isActive: boolean
}

export const MenuButton = styled(Button)<MenuButtonProps>`
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  gap: 0.5rem;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : 'transparent'};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.white : theme.colors.black};

  &:hover {
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.primary : theme.colors.gray_100};
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.white : theme.colors.black};
    opacity: ${({ isActive }) => (isActive ? 0.8 : 1)};
  }
`

export const PathLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
`
