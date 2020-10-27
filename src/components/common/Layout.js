import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HeaderReduxContainer } from "containers";

const Content = styled.main`
  border: 1px solid orangered;
  min-height: calc(100vh - 84px);
`;

const TempMenu = () => {
  return (
    <>
      <span>[Temp Menu] </span>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/history"> History </NavLink>
    </>
  );
};

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderReduxContainer />
      <Content>
        <TempMenu />
        {children}
      </Content>
    </>
  );
};
