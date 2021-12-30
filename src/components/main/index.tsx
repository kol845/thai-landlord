import React from "react"

import { Button } from "@components"
import { Wrapper, Container } from "./styled"

export const Main: React.FC = () => {
  return (
    <>
      <h1>superplate</h1>
      <p>The frontend boilerplate with superpowers!</p>
      <Button>Docs</Button>
    </>
  )
}
