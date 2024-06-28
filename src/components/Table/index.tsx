import * as S from './styles'

type Column = {
  key: string
  title: string
}

type DataItem = {
  [key: string]: React.ReactNode
}

type GenericTableProps = {
  columns: Column[]
  data: DataItem[]
  renderActions?: (item: DataItem, index: number) => React.ReactNode
}

const GenericTable: React.FC<GenericTableProps> = ({
  columns,
  data,
  renderActions,
}) => {
  return (
    <S.TableContainer>
      <table>
        <thead>
          <tr>
            {renderActions && <th>Ações</th>}
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {renderActions && <td>{renderActions(item, index)}</td>}
              {columns.map((column) => (
                <td key={column.key}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </S.TableContainer>
  )
}

export default GenericTable
