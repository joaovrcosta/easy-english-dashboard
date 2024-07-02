// pages/ClassesPage.tsx
import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import GenericTable from '@/components/Table'
import OrderDetailsComponent from '@/components/OrderDetails'
import { useState } from 'react'
import { Button } from '@/components/atoms/Button'
import { FiPlus } from 'react-icons/fi'
import { FaEye } from 'react-icons/fa'
import * as Dialog from '@radix-ui/react-dialog'
import { StudentsByClassModal } from '@/components/modals/StudentsByClassModal'

export default function ClassesPage() {
  const [isStudentsModalOpen, setStudentsModalOpen] = useState(false)
  const [isNewClassModalOpen, setisNewClassModalOpen] = useState(false)
  const [activeDetailsIndex, setActiveDetailsIndex] = useState<number | null>(
    null
  )

  const handleToggleDetails = (index: number) => {
    setActiveDetailsIndex(activeDetailsIndex === index ? null : index)
  }

  const columns = [
    { key: 'acronym', title: 'Sigla' },
    { key: 'name', title: 'Nome' },
    { key: 'price', title: 'V/Hora' },
    { key: 'category', title: 'Categoria' },
    { key: 'language', title: 'Idioma' },
    { key: 'average', title: 'Média' },
    { key: 'typeOfAssessment', title: 'Tipo Avaliação' },
    { key: 'students', title: 'Alunos' },
  ]

  const data = [
    {
      acronym: 'ENG101',
      name: 'Inglês',
      price: 'R$35,00',
      status: 'Em dia',
      category: 'Língua',
      language: 'Inglês',
      average: 7,
      typeOfAssessment: 'Número',
      students: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            cursor: 'pointer',
          }}
        >
          <Dialog.Root
            open={isStudentsModalOpen}
            onOpenChange={setStudentsModalOpen}
          >
            <Dialog.Trigger asChild>
              <S.SeeMoreButton>
                <FaEye size={24} />
              </S.SeeMoreButton>
            </Dialog.Trigger>
            <StudentsByClassModal />
          </Dialog.Root>
        </div>
      ),
    },
    {
      acronym: 'MATH202',
      name: 'Matemática',
      price: 'R$35,00',
      status: 'Atrasado',
      category: 'Ciências Exatas',
      language: 'Português',
      average: 8,
      typeOfAssessment: 'Nota',
      students: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            cursor: 'pointer',
          }}
        >
          <Dialog.Root
            open={isStudentsModalOpen}
            onOpenChange={setStudentsModalOpen}
          >
            <Dialog.Trigger asChild>
              <S.SeeMoreButton>
                <FaEye size={24} />
              </S.SeeMoreButton>
            </Dialog.Trigger>
            <StudentsByClassModal />
          </Dialog.Root>
        </div>
      ),
    },
  ]

  return (
    <S.MainContainer>
      <S.Title>
        <Heading>Turmas</Heading>
      </S.Title>
      <S.AddNewClassContainer>
        <div></div>
        <Button color="white" rounding="rounded" backgroundColor="primary">
          <FiPlus size={24} />
          Nova turma
        </Button>
      </S.AddNewClassContainer>
      <GenericTable columns={columns} data={data} />
      <OrderDetailsComponent
        toggleOrderDetails={handleToggleDetails}
        isOpen={activeDetailsIndex !== null}
      />
    </S.MainContainer>
  )
}
