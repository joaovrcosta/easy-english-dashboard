import { useState } from 'react'
import OrderDetailsComponent from '../OrderDetails'
import * as S from './styles'
import { IoMdArrowForward, IoMdClose } from 'react-icons/io'
import { CiClock2 } from 'react-icons/ci'
import { Text } from '../atoms/Text'
import { FaRegCalendarPlus } from 'react-icons/fa'
import { MdOutlineCalendarMonth } from 'react-icons/md'
import { FaMapPin } from 'react-icons/fa'

export function OrderBox({ name }: { name: string }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const handleToggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen)
  }

  return (
    <>
      <S.Container>
        <S.OrderHeading>
          <h3>{name}</h3>
          <S.TimingInformation>
            {/* <S.Timing>
              <MdOutlineCalendarMonth size={18} />
              25/06/2024
            </S.Timing> */}
            <S.CloseButton>
              <IoMdClose size={24} />
            </S.CloseButton>
          </S.TimingInformation>
        </S.OrderHeading>
        <S.CostumerInfo>
          <p>Maria Silva</p>
          <p>(11)95827-4220</p>
        </S.CostumerInfo>
        <S.Cost>
          <div>
            <S.Label>Situação</S.Label>
          </div>
          <div style={{ textAlign: 'right', alignItems: 'center' }}>
            <Text weight="extrabold" color="primary">
              Pinned
              <FaMapPin size={18} />
            </Text>
          </div>
        </S.Cost>
        {/* 
        <S.LocationContainer>
          <S.Label>Entrega</S.Label>
          <p>Av.Domingos de Almeida, 154</p>
        </S.LocationContainer> */}

        <S.AcceptOrderButton>
          <S.AcceptButton
            color="primary"
            rounding="rounded"
            onClick={handleToggleDetails}
            isDetailOpening={isDetailsOpen}
          >
            Ver situação <IoMdArrowForward size={24} />
          </S.AcceptButton>
        </S.AcceptOrderButton>
        <OrderDetailsComponent
          toggleOrderDetails={handleToggleDetails}
          isOpen={isDetailsOpen}
        />
      </S.Container>
    </>
  )
}
