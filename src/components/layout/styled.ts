import styled from "styled-components"

export const Root = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`
export const ContentContainer = styled.div`
  display: flex;
  text-align: center;
  padding: 2rem 0;
`
