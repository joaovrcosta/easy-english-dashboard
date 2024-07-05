import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import { Button } from '@/components/atoms/Button'
import { FiPlus } from 'react-icons/fi'
import { Text } from '@/components/atoms/Text'
import { ClassBox } from '@/components/ClassBox'

export default function SchedulePage() {
  return (
    <S.Container>
      <Heading>Horários/Eventos</Heading>
      <S.CardsWrapper>
        <S.CreatingCategory>
          <Text color="primary" weight="semibold" size="lg">
            Horários
          </Text>
          <S.UserHandleContainer>
            <S.ClassesContainer>
              <ClassBox name="SYM1" professor="Elisel" date="12:00-14:00" />
              <ClassBox name="SYM1" professor="Elisel" date="12:00-14:00" />
              <ClassBox name="SYM1" professor="Elisel" date="12:00-14:00" />
              <ClassBox name="SYM1" professor="Elisel" date="12:00-14:00" />
              <ClassBox name="SYM1" professor="Elisel" date="12:00-14:00" />
            </S.ClassesContainer>

            <S.FooterCard>
              <div></div>
              <S.NewCategoryButton
                backgroundColor="transparent"
                rounding="rounded"
                color="white"
              >
                <FiPlus size={24} />
                Novo horário
              </S.NewCategoryButton>
            </S.FooterCard>
          </S.UserHandleContainer>
        </S.CreatingCategory>
        <S.CreatingCategory>
          <Text color="primary" weight="semibold" size="lg">
            Eventos
          </Text>
          <S.UserHandleContainer>
            <S.Products>
              <Text>Nenhum evento ainda</Text>
            </S.Products>
            <S.FooterCard>
              <div></div>
              <S.NewCategoryButton
                backgroundColor="transparent"
                rounding="rounded"
                color="white"
              >
                <FiPlus size={24} />
                Novo evento
              </S.NewCategoryButton>
            </S.FooterCard>
          </S.UserHandleContainer>
        </S.CreatingCategory>
      </S.CardsWrapper>
    </S.Container>
  )
}
