import React from "react"

import { Root, ContentContainer } from "./styled"
import { BottomNav } from "./bottom-nav"
import PersistentDrawerLeft from "./drawer"
import GlobalStyle from "@styles/globalStyles"

export const Layout: React.FC = ({ children }) => {
  return (
    <Root>
      <ContentContainer>
        <PersistentDrawerLeft>
          <GlobalStyle />
          <main>{children}</main>
        </PersistentDrawerLeft>
      </ContentContainer>
      <BottomNav />
    </Root>
  )
}
