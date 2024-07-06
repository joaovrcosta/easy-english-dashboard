import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { Input } from '@/components/atoms/Input'
import { BsCurrencyDollar } from 'react-icons/bs'
import Image from 'next/image'
import GenericTable from '@/components/Table'

export default function StudentPage() {
  const columns = [
    { key: 'acronym', title: 'Parcela' },
    { key: 'name', title: 'Vencimento' },
    { key: 'price', title: 'Valor' },
    { key: 'cobranca', title: 'Data/Multa' },
    { key: 'type', title: 'Tipo' },
  ]

  const data = [
    {
      acronym: '1/6',
      name: '10/02/2024',
      price: 'R$296,00',
      cobranca: '16/02/2024',
      type: 'Mensalidade',
    },
    {
      acronym: '1/2',
      name: '10/02/2024',
      price: 'R$296,00',
      cobranca: '16/02/2024',
      type: 'Mensalidade',
    },
    {
      acronym: '1/3',
      name: '10/02/2024',
      price: 'R$296,00',
      cobranca: '16/02/2024',
      type: 'Mensalidade',
    },
    {
      acronym: '1/4',
      name: '10/02/2024',
      price: 'R$296,00',
      cobranca: '16/02/2024',
      type: 'Mensalidade',
    },
    {
      acronym: '1/5',
      name: '10/02/2024',
      price: 'R$296,00',
      cobranca: '16/02/2024',
      type: 'Mensalidade',
    },
    {
      acronym: '1/6',
      name: '10/02/2024',
      price: 'R$296,00',
      cobranca: '16/02/2024',
      type: 'Mensalidade',
    },
  ]

  return (
    <S.MainContainer>
      <S.HeadingContainer>
        <S.StudentAvatar>
          <Image
            src="/twitter-avi-gender-balanced-figure.png"
            alt=""
            width={120}
            height={120}
          />
        </S.StudentAvatar>
        <Heading size="lg">João Victor Ribeiro Costa</Heading>
        <S.StatusContainer>
          <Text>Ativo</Text>
        </S.StatusContainer>
      </S.HeadingContainer>
      <S.StudentInfo>
        <S.HandleBar>
          <S.MonthlyPayment>
            <BsCurrencyDollar size={24} />
            <p>Mensalidade</p>
          </S.MonthlyPayment>
          <S.MonthlyPayment>
            <BsCurrencyDollar size={24} />
            <p>Contratos</p>
          </S.MonthlyPayment>
        </S.HandleBar>
        <S.SubtitleContainer>
          <Heading>Dados do aluno</Heading>
        </S.SubtitleContainer>
        <S.InputWrapper>
          <Input labelName="Nome" />
          <Input labelName="E-mail" />
          <Input labelName="CPF" />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input labelName="Nome" />
          <Input labelName="Nome" />
          <Input labelName="Nome" />
          <Input labelName="Nome" />
        </S.InputWrapper>
        <S.SubtitleContainer>
          <Heading>Endereço aluno</Heading>
        </S.SubtitleContainer>
        <S.InputWrapper>
          <Input labelName="Nome" />
          <Input labelName="Nome" />
          <Input labelName="Nome" />
        </S.InputWrapper>
        <S.InputWrapper>
          <Input labelName="Nome" />
          <Input labelName="Nome" />
          <Input labelName="Nome" />
          <Input labelName="Nome" />
        </S.InputWrapper>
        <GenericTable columns={columns} data={data} />
      </S.StudentInfo>
    </S.MainContainer>
  )
}
