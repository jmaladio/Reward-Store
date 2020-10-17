import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";
import storeFactory from "store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "components/common";
import { Home, History } from "components/pages";

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
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/history" component={History} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </>
  );
}

export default App;
