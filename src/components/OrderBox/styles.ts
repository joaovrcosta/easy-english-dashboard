import styled from 'styled-components'
import { Button } from '../atoms/Button'

interface OrderBoxProps {
  isDetailOpening: boolean
}

export const Container = styled.main`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  transition: box-shadow 0.3s ease; /* Adiciona uma transição suave para o efeito de sombra */

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`

export const AcceptOrderButton = styled.div`
  display: flex;
  margin-top: 0.5rem;
`

export const AcceptButton = styled(Button)<OrderBoxProps>`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;

  ${({ isDetailOpening, theme }) =>
    isDetailOpening &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    &:hover {
      background-color: ${theme.colors.primary};
    }
  `}
`

export const CostumerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 0.5rem 0;
`

export const Cost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_100};
  padding-bottom: 0.5rem;
`

export const Label = styled.p`
  font-size: 14px;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray_400};
  }
`
export const OrderHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
  }
`
export const Timing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  color: white;
`
export const TimingInformation = styled.div`
  display: flex;
  gap: 0.5rem;
`
