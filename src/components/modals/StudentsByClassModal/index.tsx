import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import { IoMdClose } from 'react-icons/io'
import { Text } from '@/components/atoms/Text'
import { FaEye } from 'react-icons/fa'
import { GoPlusCircle } from 'react-icons/go'
import { IoRemoveCircleOutline } from 'react-icons/io5'
import Link from 'next/link'

export function StudentsByClassModal() {
  return (
    <S.Portal>
      <S.Overlay />
      <S.Content>
        <S.CloseButton>
          <IoMdClose size={32} color="#000" />
        </S.CloseButton>
        <S.MainContainer>
          <S.Title>
            <Heading weight="bold">Estudantes</Heading>
          </S.Title>
          <S.StudentsSection>
            <S.StudentBox>
              <div>
                <Link
                  href="/students/student/128"
                  style={{
                    textDecoration: 'none',
                    color: 'rgb(237, 25, 65)',
                    fontWeight: '600',
                  }}
                >
                  João Victor
                </Link>
                <Text>RA: 4853</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <S.SeeStudentButton>
                  <FaEye size={24} />
                </S.SeeStudentButton>
                <S.PinStudentButton>
                  <GoPlusCircle size={24} />
                </S.PinStudentButton>
                <S.PinStudentButton>
                  <IoRemoveCircleOutline size={26} />
                </S.PinStudentButton>
              </div>
            </S.StudentBox>
            <S.StudentBox>
              <div>
                <Link
                  href="/students/student/128"
                  style={{
                    textDecoration: 'none',
                    color: 'rgb(237, 25, 65)',
                    fontWeight: '600',
                  }}
                >
                  João Victor
                </Link>
                <Text>RA: 4853</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <S.SeeStudentButton>
                  <FaEye size={24} />
                </S.SeeStudentButton>
                <S.PinStudentButton>
                  <GoPlusCircle size={24} />
                </S.PinStudentButton>
                <S.PinStudentButton>
                  <IoRemoveCircleOutline size={26} />
                </S.PinStudentButton>
              </div>
            </S.StudentBox>
            <S.StudentBox>
              <div>
                <Link
                  href="/students/student/128"
                  style={{
                    textDecoration: 'none',
                    color: 'rgb(237, 25, 65)',
                    fontWeight: '600',
                  }}
                >
                  João Victor
                </Link>
                <Text>RA: 4853</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <S.SeeStudentButton>
                  <FaEye size={24} />
                </S.SeeStudentButton>
                <S.PinStudentButton>
                  <GoPlusCircle size={24} />
                </S.PinStudentButton>
                <S.PinStudentButton>
                  <IoRemoveCircleOutline size={26} />
                </S.PinStudentButton>
              </div>
            </S.StudentBox>
          </S.StudentsSection>
        </S.MainContainer>
      </S.Content>
    </S.Portal>
  )
}
