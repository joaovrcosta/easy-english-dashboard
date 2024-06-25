import { Button } from '@/components/atoms/Button'
import * as S from './styles'
import { Heading } from '@/components/atoms/Heading'
import { FaWhatsapp, FaEye } from 'react-icons/fa'
import { Tooltip } from '@/components/molecules/Tooltip'
import { useState } from 'react'
import OrderDetailsComponent from '@/components/OrderDetails'
import { FiPlus } from 'react-icons/fi'

export default function StudentsPage() {
  const [activeDetailsIndex, setActiveDetailsIndex] = useState(null)

  const handleToggleDetails = (index: any) => {
    setActiveDetailsIndex(activeDetailsIndex === index ? null : index)
  }

  return (
    <S.Container>
      <S.SearchingContainer>
        <div style={{ padding: '0.5rem' }}>
          <Heading>Alunos</Heading>
        </div>
        <S.InputContainer>
          <S.SearchIcon />
          <S.Input type="text" placeholder="Busque pelo RA do aluno" />
        </S.InputContainer>
        <S.FiltersContainer>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <Button backgroundColor="primary" color="white">
              Todos
            </Button>
            <Button>Em atraso</Button>
            <Button>Cancelado</Button>
          </div>
          <div>
            <Button
              backgroundColor="primary"
              color="white"
              rounding="rounded"
              variant="lg"
            >
              <FiPlus size={24} />
              Novo cliente
            </Button>
          </div>
        </S.FiltersContainer>
      </S.SearchingContainer>
      <S.StudentListContainer>
        <table>
          <thead>
            <tr>
              <th>Recursos</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Nota</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: 'Maria Silva',
                course: 'Inglês',
                grade: 10,
                status: 'Em dia',
              },
              {
                name: 'João Pereira',
                course: 'Matemática',
                grade: 9,
                status: 'Atrasado',
              },
            ].map((student, index) => (
              <tr key={index}>
                <td>
                  <S.ResourcesContainer>
                    <S.SeeProfileButton
                      isDetailOpening={activeDetailsIndex === index}
                      onClick={() => handleToggleDetails(index)}
                    >
                      <FaEye
                        size={20}
                        className={
                          activeDetailsIndex === index ? 'active-icon' : ''
                        }
                      />
                    </S.SeeProfileButton>
                    <S.ResourceButton>
                      <FaWhatsapp size={20} color="#25d366" />
                    </S.ResourceButton>
                  </S.ResourcesContainer>
                </td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.grade}</td>
                <td>
                  <S.Tag>{student.status}</S.Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.StudentListContainer>
      <OrderDetailsComponent
        toggleOrderDetails={handleToggleDetails}
        isOpen={activeDetailsIndex !== null}
      />
    </S.Container>
  )
}
