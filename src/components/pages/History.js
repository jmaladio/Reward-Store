import React, { useEffect } from "react";

export const History = (props) => {
  const { onGetUserHistory } = props;

  useEffect(() => {
    onGetUserHistory();
  }, [onGetUserHistory]);

  return (
    <>
      <h1>User History</h1>
    </>
  );
};
