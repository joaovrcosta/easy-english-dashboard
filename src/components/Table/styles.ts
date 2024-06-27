import styled from 'styled-components'

export const TableContainer = styled.section`
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
