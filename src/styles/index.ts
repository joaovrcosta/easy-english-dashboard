import styled from 'styled-components'

export const Container = styled.main``

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust this if needed */
  margin: 0 auto;
`

export const LoginContainer = styled.div`
  padding: 1.5rem 1rem;
  width: 360px;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;

  input {
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray_100};
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;

  h3 {
    font-size: 32px;
    font-family: Poppins;
    color: ${({ theme }) => theme.colors.primary};

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`
