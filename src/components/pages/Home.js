import React, { useEffect } from "react";
import { Layout } from "components/common";

export const Home = (props) => {
  const { onGetUserData } = props;

  useEffect(() => {
    onGetUserData();
  }, [onGetUserData]);
  console.log(props);
  return (
    <>
      <Layout>
        <h1>Home</h1>
      </Layout>
    </>
  );
};
