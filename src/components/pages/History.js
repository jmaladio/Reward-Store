import React, { useEffect } from "react";

export const History = (props) => {
  const { onGetPurchaseHistory } = props;

  useEffect(() => {
    onGetPurchaseHistory();
  }, [onGetPurchaseHistory]);

  return (
    <>
      <h1>Purchase History</h1>
    </>
  );
};
