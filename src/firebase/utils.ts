import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

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

export const userExists = uid => {
  var docRef = firebase.firestore().collection("users").doc(uid)
  docRef
    .get()
    .then(doc => {
      return doc.exists
    })
    .catch(error => {
      console.log("Error getting document:", error)
    })
  return false
}

export const storeNewUser = user => {
  var docRef = firebase.firestore().collection("users").doc(user.uid)
  docRef
    .set({
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      createdAt: firebase.firestore.Timestamp.now(),
      modifiedAt: firebase.firestore.Timestamp.now(),
    })
    .then(doc => {
      console.log("User successfully created!")
      console.log(doc)
    })
    .catch(error => {
      console.log("Error creating document:", error)
    })
}
