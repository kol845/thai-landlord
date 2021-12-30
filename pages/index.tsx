import React from "react";

import { Wrapper, Header, Main, Footer, Cards } from "@components";
import GlobalStyle from "@styles/globalStyles";

import firebase from '@firebase/initFirebase'
firebase()

// import firebaseWrite from '@firebase/scripts/write_dummy'
// firebaseWrite()
import firebaseRead from '@firebase/scripts/read_dummy'
firebaseRead()

const Home: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main />
      <Cards />
      <Footer />
    </Wrapper>
  );
};
export default Home;
