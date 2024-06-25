import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import { Button } from '@/components/atoms/Button'
import { FiPlus } from 'react-icons/fi'
import { Text } from '@/components/atoms/Text'

export default function SchedulePage() {
  return (
    <S.Container>
      <Heading>Horários/Eventos</Heading>
      <S.CardsWrapper>
        <S.CreatingCategory>
          <Text color="primary" weight="semibold" size="lg">
            Eventos
          </Text>
          <S.UserHandleContainer>
            <S.Products>
              <Text>Nenhum produto aqui ainda</Text>
            </S.Products>
            <S.FooterCard>
              <S.NewCategoryButton
                backgroundColor="transparent"
                rounding="rounded"
                color="white"
              >
                <FiPlus size={24} />
                Novo evento
              </S.NewCategoryButton>
              <div></div>
            </S.FooterCard>
          </S.UserHandleContainer>
        </S.CreatingCategory>
        <S.CreatingCategory>
          <Text color="primary" weight="semibold" size="lg">
            Horários
          </Text>
          <S.UserHandleContainer>
            <S.Products>
              <Text>Nenhum horário ainda</Text>
            </S.Products>
            <S.FooterCard>
              <S.NewCategoryButton
                backgroundColor="transparent"
                rounding="rounded"
                color="white"
              >
                <FiPlus size={24} />
                Novo horário
              </S.NewCategoryButton>
              <div></div>
            </S.FooterCard>
          </S.UserHandleContainer>
        </S.CreatingCategory>
      </S.CardsWrapper>
    </S.Container>
  )
}
