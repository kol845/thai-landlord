import firebase from "firebase/compat/app"
import "firebase/compat/auth"

import { useEffect, useState } from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

import { setUserCookie } from "@firebase/userCookies"

import { IUser } from "@interfaces/firestore/user"

const firebaseAuthConfig = {
  signInFlow: "popup",
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
    // add additional auth flows below
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: ({ user }: { user: IUser }) => {
      setUserCookie(user)
      return true
    },
  },
}

export const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true)
    }
  }, [])
  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  )
}
