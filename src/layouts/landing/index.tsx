import { Header } from '@/components/Header'
import styled from 'styled-components'

interface ILayout {
  children: React.ReactNode
}

export function LandingLayout({ children }: ILayout) {
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}

export const Container = styled.div`
  margin-top: 0rem;
`
