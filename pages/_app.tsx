import React from "react"
import { AppProps } from "next/app"
import { StyledThemeProvider } from "@definitions/styled-components"
import { Provider } from "react-redux"
import store from "@redux/store"
import { appWithTranslation } from "@i18n"

import { Layout } from "@components"

import initFirebase from "@firebase/initFirebase"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  initFirebase()
  return (
    <StyledThemeProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </StyledThemeProvider>
  )
}

export default MyApp
