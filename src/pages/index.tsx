import { Sidebar } from '@/components/Sidebar'
import { Heading } from '@/components/atoms/Heading'
import { LandingLayout } from '@/layouts/landing'
import * as S from '../styles/index'
import { Button } from '@/components/atoms/Button'
import { LogoContainer } from '@/components/Sidebar/styles'

export default function IndexPage() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LoginContainer>
          <S.LoginFormContainer>
            <div>
              <S.LogoContainer>
                <h3>
                  Easy<span>Alvim</span>
                </h3>
              </S.LogoContainer>
              <Heading color="black">Login</Heading>
            </div>
            <input type="text" name="email" />
            <input type="text" name="password" />
            <Button
              color="white"
              backgroundColor="primary"
              hug={true}
              rounding="rounded"
              style={{ marginTop: '1.5rem' }}
            >
              Entrar
            </Button>
          </S.LoginFormContainer>
        </S.LoginContainer>
      </S.Wrapper>
    </S.Container>
  )
}

IndexPage.getLayout = (page: React.ReactNode) => (
  <LandingLayout>{page}</LandingLayout>
)
