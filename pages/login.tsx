import React, { useEffect } from "react"

import { Wrapper, FirebaseAuth } from "@components"
import GlobalStyle from "@styles/globalStyles"

import { useRouter } from "next/router"

const Login: React.FC = () => {
  const router = useRouter()

  return (
    <Wrapper>
      <GlobalStyle />
      <FirebaseAuth />
    </Wrapper>
  )
}
export default Login
