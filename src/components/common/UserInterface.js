import React from "react";
import styled from "styled-components";

const UserInterfaceWrapper = styled.div`
  border: 2px solid darkgrey;
  min-width: 8rem;
  padding: 1rem;
  background-color: #eee;
  cursor: pointer;
`;

export const UserInterface = (props) => {
  const { userDataLoading: loading, userDataError: error, userData } = props;
  console.log(userData);
  if (userData) {
    const { name, points } = userData;
    return (
      <UserInterfaceWrapper>
        {name} - {points}
      </UserInterfaceWrapper>
    );
  } else
    return (
      <UserInterfaceWrapper>
        <p>Loading...</p>;
      </UserInterfaceWrapper>
    );
};
