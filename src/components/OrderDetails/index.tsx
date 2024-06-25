import { useState } from 'react'
import * as S from './styles'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineModeEdit } from 'react-icons/md'
import { Text } from '../atoms/Text'

interface IOrderDetailsComponent {
  isOpen: boolean
  toggleOrderDetails: any
}

function OrderDetailsComponent({
  isOpen,
  toggleOrderDetails,
}: IOrderDetailsComponent) {
  return (
    <>
      <S.OrderDetails isOpen={isOpen}>
        <S.CloseButton onClick={toggleOrderDetails}>
          <IoMdClose size={32} />
        </S.CloseButton>
        <S.NameTitle>
          <h1>Maria Silva</h1>
          <MdOutlineModeEdit size={20} />
        </S.NameTitle>
        <S.StudentInfo>
          <Text>Dados do cliente</Text>
          <S.Wrapper>
            <S.Input placeholder="Nome" />
            <S.Input placeholder="CPF" />
          </S.Wrapper>
          <S.Wrapper>
            <S.Input placeholder="Nascimento" />
            <S.Input placeholder="E-mail" />
          </S.Wrapper>
          <S.Wrapper>
            <S.Input placeholder="Número Residencial" />
            <S.Input placeholder="Celular" />
          </S.Wrapper>
        </S.StudentInfo>
        <S.StudentInfo>
          <Text>Endereço</Text>
          <S.Wrapper>
            <S.Input placeholder="Rua" />
            <S.Input placeholder="Bairro" />
          </S.Wrapper>
          <S.Wrapper>
            <S.Input placeholder="CEP" />
            <S.Input placeholder="Complemento" />
          </S.Wrapper>
          <S.Wrapper>
            <S.Input placeholder="Número Residencial" />
            <S.Input placeholder="Celular" />
          </S.Wrapper>
        </S.StudentInfo>
      </S.OrderDetails>
    </>
  )
}

export default OrderDetailsComponent
