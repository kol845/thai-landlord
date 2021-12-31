import React from "react"

import { Wrapper, FirebaseAuth } from "@components"

import { useRouter } from "next/router"

const Login: React.FC = () => {
  const router = useRouter()

  return (
    <Wrapper>
      <FirebaseAuth />
    </Wrapper>
  )
}
export default Login
