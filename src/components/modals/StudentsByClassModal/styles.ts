import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Portal = styled(Dialog.Portal)`
  @media (max-width: 769px) {
    display: none;
  }
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 999999;
`

export const Content = styled(Dialog.Content)`
  max-width: 37.5rem;
  font-family: Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 1.5rem 2rem 2.5rem 2rem;
  z-index: 999999;
  max-height: 42rem;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 769px) {
    padding: 1rem 1rem 2rem 1rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray_500};
`
export const StudentsSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  border-radius: 12px;

  & > :last-child {
    border: none;
  }
`
export const StudentBox = styled.div`
  padding: 1.5rem 1rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_100};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SeeStudentButton = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s;
  background-color: ${({ theme }) => theme.colors.secondary};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`

export const PinStudentButton = styled.div`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s;
  background-color: ${({ theme }) => theme.colors.white};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`

export const Title = styled(Dialog.Title)``

export const MainContainer = styled.div`
  width: 100%;
`
