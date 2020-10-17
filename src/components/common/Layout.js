import React from "react";
import styled from "styled-components";
import { HeaderReduxContainer } from "containers";

const Content = styled.main`
  border: 1px solid orangered;
  height: calc(100vh - 84px);
`;

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderReduxContainer />
      <Content>{children}</Content>
    </>
  );
};
