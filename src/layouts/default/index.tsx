import styled from 'styled-components'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

interface ILayout {
  children: React.ReactNode
}

export function DefaultLayout({ children }: ILayout) {
  return (
    <>
      {/* <HeaderWrapper>
        <Header />
      </HeaderWrapper> */}
      <MainContent>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </MainContent>
    </>
  )
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
`

const MainContent = styled.div`
  display: flex;
`

const SidebarWrapper = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 0;
  width: 250px;
  height: calc(100vh - 3.5rem);
  z-index: 2;
  transition: transform 0.3s ease-in-out;
  background-color: #fff;
`

const ContentWrapper = styled.main`
  margin-left: 250px;
  padding: 0 20px 0 0;
  flex: 1;
`

export const Container = styled.div`
  @media (max-width: 768px) {
    margin-top: 3.5rem;
  }
`
