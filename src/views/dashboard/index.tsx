import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import { OrderBox } from '@/components/OrderBox'
import { Text } from '@/components/atoms/Text'
import { FaMapPin } from 'react-icons/fa'

export default function DashboardPage() {
  return (
    <>
      <S.Container>
        <S.OrdersContainer>
          <S.InputContainer>
            <S.SearchIcon />
            <S.Input type="text" placeholder="Enter the receipt number" />
          </S.InputContainer>
          <S.OrdersHeading>
            <h3>Pins</h3>
            <FaMapPin size={24} />
          </S.OrdersHeading>
          <S.OrdersStatus>
            <S.ButtonStatus rounding="rounded">Todos</S.ButtonStatus>
            <S.ButtonStatus rounding="rounded">Novo</S.ButtonStatus>
            <S.ButtonStatus rounding="rounded">Em preparo</S.ButtonStatus>
            <S.ButtonStatus rounding="rounded">Cancelados</S.ButtonStatus>
          </S.OrdersStatus>
          <S.Orders>
            <OrderBox />
            <OrderBox />
          </S.Orders>
        </S.OrdersContainer>
        <S.Informations>
          <Heading>Dashboard</Heading>
          <S.CardsWrapper>
            <S.TotalCard>
              <Text>Total</Text>
              <h3>R$ 45,48</h3>
            </S.TotalCard>
            <S.TotalCard>
              <Text>Total</Text>
              <h3>R$ 45,48</h3>
            </S.TotalCard>
            <S.TotalCard>
              <Text>Total</Text>
              <h3>R$ 45,48</h3>
            </S.TotalCard>
          </S.CardsWrapper>
        </S.Informations>
      </S.Container>
    </>
  )
}
