import React from "react"

import { Root, ContentContainer } from "./styled"
import { BottomNav } from "./bottom-nav"

export const Layout: React.FC = ({ children }) => {
  return (
    <Root>
      <ContentContainer>
        <main>{children}</main>
      </ContentContainer>
      <BottomNav />
    </Root>
  )
}
