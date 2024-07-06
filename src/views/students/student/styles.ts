import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 1.5rem 1rem 1rem 1rem;
`
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(21, 206, 5, 0.3);
  padding: 1rem;
  border-radius: 6px;
  height: 40px;
  color: #15ce05;
`
export const StudentInfo = styled.div`
  padding: 1rem 0;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const HandleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`

export const MonthlyPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  p {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;

    svg,
    p {
      color: white;
    }
  }
`

export const SubtitleContainer = styled.div`
  margin-top: 1rem;
`
export const StudentAvatar = styled.div`
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`
