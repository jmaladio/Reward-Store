import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const Content = styled.main`
  border: 1px solid orangered;
  height: calc(100vh - 84px);
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
