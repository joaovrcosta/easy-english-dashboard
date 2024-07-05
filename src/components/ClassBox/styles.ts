import styled from 'styled-components'

export const MainContainer = styled.div`
  cursor: pointer;

  &:hover {
    transition: 0.2s ease;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra leve */
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  gap: 0.5rem;
`
export const HandleButton = styled.div`
  svg {
    color: #a6a6a6;
    &:hover {
      color: #3e3e3e;
    }
  }
`
