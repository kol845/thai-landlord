import React from "react"

import { Root, ContentContainer } from "./styled"
import { BottomNav } from "./bottom-nav"
import PersistentDrawerLeft from "./drawer"

export const Layout: React.FC = ({ children }) => {
  return (
    <Root>
      <ContentContainer>
        <PersistentDrawerLeft>
          <main>{children}</main>
        </PersistentDrawerLeft>
      </ContentContainer>
      <BottomNav />
    </Root>
  )
}
