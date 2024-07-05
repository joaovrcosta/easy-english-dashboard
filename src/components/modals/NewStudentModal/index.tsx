import { Heading } from '@/components/atoms/Heading'
import * as S from './styles'
import { IoMdClose } from 'react-icons/io'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'

export function NewStudentModal() {
  return (
    <S.Portal>
      <S.Overlay />
      <S.Content>
        <S.CloseButton>
          <IoMdClose size={32} color="#414143" />
        </S.CloseButton>
        <S.MainContainer>
          <S.Title>
            <Heading weight="medium" color="primary">
              Cadastrar novo aluno
            </Heading>
          </S.Title>
          <S.FormNewStudentContainer>
            <S.HeadingContainer>
              <Heading size="sm">Dados do aluno</Heading>
            </S.HeadingContainer>
            <S.WrapperInput>
              <Input labelName="Nome" />
              <Input labelName="Nascimento" />
              <Input labelName="E-mail" />
            </S.WrapperInput>
            <S.WrapperInput>
              <Input labelName="Estado Civil" />
              <Input labelName="Religião" />
              <Input labelName="CPF" />
            </S.WrapperInput>
            <S.WrapperInput>
              <Input labelName="RG" />
              <Input labelName="Nacionalidade" />
              <Input labelName="Sexo" />
            </S.WrapperInput>
            <S.HeadingContainer>
              <Heading size="sm">Endereço</Heading>
            </S.HeadingContainer>
            <S.WrapperInput>
              <Input labelName="Endereço" />
              <Input labelName="Bairro" />
              <Input labelName="Cidade" />
            </S.WrapperInput>
            <S.WrapperInput>
              <Input labelName="CEP" />
              <Input labelName="UF" />
              <Input labelName="Número" />
            </S.WrapperInput>
            <S.HeadingContainer>
              <Heading size="sm">Dados do responsavel</Heading>
            </S.HeadingContainer>
            <S.WrapperInput>
              <Input labelName="Nome" />
              <Input labelName="Nascimento" />
              <Input labelName="Naturalidade" />
            </S.WrapperInput>
            <S.WrapperInput>
              <Input labelName="Telefone" />
              <Input labelName="Celular" />
              <Input labelName="E-mail" />
            </S.WrapperInput>
            <S.WrapperInput>
              <Input labelName="RG" />
              <Input labelName="CPF" />
              <Input labelName="Parentesco" />
            </S.WrapperInput>
            <S.HeadingContainer>
              <Heading size="sm">Endereço responsavel</Heading>
            </S.HeadingContainer>
            <S.WrapperInput>
              <Input labelName="Endereço" />
              <Input labelName="UF" />
              <Input labelName="Bairro" />
            </S.WrapperInput>
            <S.WrapperInput>
              <Input labelName="CEP" />
              <Input labelName="Cidade" />
            </S.WrapperInput>
            <S.WrapperButton>
              <S.BackButton color="primary" rounding="rounded">
                Voltar
              </S.BackButton>
              <Button
                backgroundColor="primary"
                rounding="rounded"
                color="white"
              >
                Salvar
              </Button>
            </S.WrapperButton>
          </S.FormNewStudentContainer>
        </S.MainContainer>
      </S.Content>
    </S.Portal>
  )
}
