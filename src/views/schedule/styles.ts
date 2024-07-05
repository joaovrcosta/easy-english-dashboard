import { Button } from '@/components/atoms/Button'
import styled from 'styled-components'

export const CardsWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Container = styled.div`
  padding: 1rem;
`
export const CreatingCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 10px;
`
export const UserHandleContainer = styled.div`
  margin-top: 1rem;
`

export const NewCategoryButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`
export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`

export const Products = styled.div`
  background-color: #f6f9fc;
  padding: 1rem;
  border-radius: 10px;
  border: 1px dashed #cad2d9;
`
export const ClassesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
