import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import { OrderBox } from '@/components/OrderBox'
import { Text } from '@/components/atoms/Text'
import { FaMapPin } from 'react-icons/fa'
import Head from 'next/head'

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard | EasyAlvim</title>
      </Head>
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
            <OrderBox name="João Victor" />
            <OrderBox name="Maria Silva" />
          </S.Orders>
        </S.OrdersContainer>
        <S.Informations>
          <Heading>Bem vindo! 😉</Heading>
          <S.CardsWrapper>
            <table>
              <thead>
                <tr>
                  <th>Segunda-feira</th>
                  <th>Terça-feira</th>
                  <th>Quarta-feira</th>
                  <th>Quinta-feira</th>
                  <th>Sexta-feira</th>
                  <th>Sabado</th>
                  <th>Domingo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sem horários para esse dia</td>
                  <td>Sem horários para esse dia</td>
                  <td>Sem horários para esse dia</td>
                  <td>Sem horários para esse dia</td>
                  <td>Sem horários para esse dia</td>
                  <td>Sem horários para esse dia</td>
                  <td>Sem horários para esse dia</td>
                </tr>
              </tbody>
            </table>
          </S.CardsWrapper>
        </S.Informations>
      </S.Container>
    </>
  )
}
