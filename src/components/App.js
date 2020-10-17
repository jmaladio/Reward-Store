import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";
import storeFactory from "store";

import { HomeReduxContainer } from "containers";

const store = storeFactory();

const GlobalStyle = createGlobalStyle`
  header,
  main {
    max-width: 1110px;
    margin: 0 auto;
    padding: 0 32px;
  }
`;

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Provider store={store}>
        <HomeReduxContainer />
      </Provider>
    </>
  );
}

export default App;
