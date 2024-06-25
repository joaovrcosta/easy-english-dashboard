import styled, { keyframes } from 'styled-components'

interface OrderDetailsProps {
  isOpen: any
}

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

export const OrderDetails = styled.div<OrderDetailsProps>`
  padding: 1rem;
  width: 50%;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-50%')};
  transition: right 0.3s ease-in-out;
  background-color: #f9f9f9;
  height: 100vh;
  overflow-y: auto;
  z-index: 3;
  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.1);
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  svg {
    border-radius: 8px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`

export const NameTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export const StudentInfo = styled.div`
  margin-bottom: 1.5rem;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  height: 40px;
  padding: 0 40px 0 10px;
  border-radius: 8px;
  width: 100%;
  margin-top: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
