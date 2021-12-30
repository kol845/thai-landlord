import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.2rem;
    padding-bottom: 0.75rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 300;
  }
`
