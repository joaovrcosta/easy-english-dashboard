import { CiSearch } from 'react-icons/ci'
import styled from 'styled-components'

interface StudentInfoProps {
  isDetailOpening: boolean
}

export const Container = styled.div`
  padding: 1rem;
`

export const SearchingContainer = styled.div``

export const InputContainer = styled.div`
  position: relative;
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
export const SearchIcon = styled(CiSearch)`
  position: absolute;
  top: 58%; /* Ajusta para o ícone ficar no meio verticalmente */
  right: 10px;
  transform: translateY(-50%); /* Alinha verticalmente o ícone */
  color: ${({ theme }) => theme.colors.primary};
  height: 24px;
  width: 24px;
`
export const FiltersContainer = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  button {
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      transition: 0.3s ease-in-out;
    }
  }
`

export const StudentListContainer = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  padding: 1rem;
  border-radius: 6px;

  /* Resetando estilos padrão da tabela */
  table {
    width: 100%;
    border-collapse: collapse; /* Remove espaços entre células */
    border-spacing: 0; /* Remove espaçamento entre células */

    thead {
      tr {
        th {
          text-align: start;
          padding: 0 1rem;
          height: 48px;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    tbody {
      tr {
        &:hover {
          background-color: #f5f6f7;
          /* transition: 0.3s ease-in-out; */
        }

        td {
          border-top: 1px solid ${({ theme }) => theme.colors.gray_100};
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray_100};
          padding: 1rem;
          height: 71px;
        }
      }
    }
  }
`

export const ResourcesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25rem;
`

export const ResourceButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 36px;
  width: 36px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray_100};
    background-color: white;
  }
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.green_500};
  color: ${({ theme }) => theme.colors.white};
`

export const SeeProfileButton = styled.button<StudentInfoProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 36px;
  width: 36px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.gray_100};
  }

  ${({ isDetailOpening, theme }) =>
    isDetailOpening &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.primary};
    }

    .active-icon {
      color: ${theme.colors.white};
    }
  `}
`
