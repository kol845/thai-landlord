import React from "react";

import { Wrapper, Header, Main, Footer, Cards, FirebaseAuth  } from "@components";
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
      <Header />
      <FirebaseAuth/>
      <Footer />
    </Wrapper>
  );
};
export default Login;
