import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import { Home } from "./pages";

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
      <Home />
    </>
  );
}

export default App;
