import React from "react";

import { Wrapper, FirebaseAuth  } from "@components";
import GlobalStyle from "@styles/globalStyles";

import firebase from '@firebase/initFirebase'
firebase()

// import firebaseWrite from '@firebase/scripts/write_dummy'
// firebaseWrite()
// import firebaseRead from '@firebase/scripts/read_dummy'
// firebaseRead()

const Login: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <FirebaseAuth/>
    </Wrapper>
  );
};
export default Login;
