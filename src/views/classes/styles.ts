import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 1rem;
`
export const Title = styled.div`
  padding: 0.5rem;
`

export const AddNewClassContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`
export const SeeMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`
