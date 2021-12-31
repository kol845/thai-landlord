import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth } from "firebase/auth"

export const userIsLoggedIn = () => {
  const [user] = useAuthState(getAuth())
  return user ? true : false
}

export const getUser = () => {
  const [user] = useAuthState(getAuth())
  return user
}

export const signOut = () => {
  return getAuth()
    .signOut()
    .catch(e => {
      console.error(e)
    })
}
