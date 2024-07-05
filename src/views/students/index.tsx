import { Button } from '@/components/atoms/Button'
import * as S from './styles'
import { Heading } from '@/components/atoms/Heading'
import { FiPlus } from 'react-icons/fi'
import { FaEye, FaWhatsapp } from 'react-icons/fa'
import GenericTable from '@/components/Table'
import OrderDetailsComponent from '@/components/OrderDetails'
import { useState } from 'react'
import { GoPlusCircle } from 'react-icons/go'
import * as Dialog from '@radix-ui/react-dialog'
import { NewStudentModal } from '@/components/modals/NewStudentModal'

export default function StudentsPage() {
  const [activeDetailsIndex, setActiveDetailsIndex] = useState(null)
  const [isNewStudentModalOpen, setNewStudentModalOpen] = useState(false)

  const handleToggleDetails = (index: any) => {
    setActiveDetailsIndex(activeDetailsIndex === index ? null : index)
  }

  const columns = [
    { key: 'name', title: 'Nome' },
    { key: 'course', title: 'Curso' },
    { key: 'grade', title: 'Nota' },
    { key: 'status', title: 'Situação' },
  ]

  const data = [
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
  ]

  const renderActions = (student: any, index: any) => (
    <S.ResourcesContainer>
      <S.SeeProfileButton
        isDetailOpening={activeDetailsIndex === index}
        onClick={() => handleToggleDetails(index)}
      >
        <FaEye
          size={20}
          className={activeDetailsIndex === index ? 'active-icon' : ''}
        />
      </S.SeeProfileButton>
      <S.ResourceButton>
        <FaWhatsapp size={20} color="#25d366" />
      </S.ResourceButton>
      <S.PinStudentButton>
        <GoPlusCircle size={20} />
      </S.PinStudentButton>
    </S.ResourcesContainer>
  )

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
            <Dialog.Root
              open={isNewStudentModalOpen}
              onOpenChange={setNewStudentModalOpen}
            >
              <Dialog.Trigger asChild>
                <Button
                  backgroundColor="primary"
                  color="white"
                  rounding="rounded"
                  variant="lg"
                >
                  <FiPlus size={24} />
                  Novo aluno
                </Button>
              </Dialog.Trigger>
              <NewStudentModal />
            </Dialog.Root>
          </div>
        </S.FiltersContainer>
      </S.SearchingContainer>
      <GenericTable
        columns={columns}
        data={data}
        renderActions={renderActions}
      />
      <OrderDetailsComponent
        toggleOrderDetails={handleToggleDetails}
        isOpen={activeDetailsIndex !== null}
      />
    </S.Container>
  )
}
