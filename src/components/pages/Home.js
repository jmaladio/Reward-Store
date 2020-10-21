import React, { useEffect } from "react";

export const Home = (props) => {
  const { onGetProductsData } = props;

  useEffect(() => {
    onGetProductsData();
  }, [onGetProductsData]);

  return (
    <>
      <h1>Home</h1>
    </>
  );
};
