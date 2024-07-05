import { Text } from '../atoms/Text'
import * as S from './styles'
import { MdClass } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'

interface ClassBoxProps {
  name: string
  date: string
  professor: string
}

export function ClassBox({ name, date, professor }: ClassBoxProps) {
  return (
    <S.MainContainer>
      <S.Content>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ marginRight: '0.5rem' }}>
            <MdClass size={24} color="#717171" />
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Text weight="semibold">{name}</Text>
              <Text>{professor}</Text>
            </div>
            <div style={{ marginLeft: '0.25rem' }}>
              <Text>{date}</Text>
            </div>
          </div>
        </div>
        <S.HandleButton>
          <BsThreeDotsVertical size={24} />
        </S.HandleButton>
      </S.Content>
    </S.MainContainer>
  )
}
