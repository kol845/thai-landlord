import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import { useUser } from '../useUser'

const readFromCloudFirestore = () => {
    // const { user } = useUser()
    
    try {
      firebase
          .firestore()
          .collection('myCollection')
          .doc('test')
          .onSnapshot(function (doc) {
              console.log(doc.data())
          })
      console.log('Data was successfully fetched from cloud firestore! Close this alert and check console for output.')
  } catch (error) {
      console.log(error)
  }
}

export default readFromCloudFirestore