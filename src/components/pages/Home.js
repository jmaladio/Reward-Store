import React, { useEffect } from "react";
import styled from "styled-components";

import { Card } from "components/common";

const HomeWrapper = styled.div`
  > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;

export const Home = (props) => {
  const { onGetProductsData, productsData, productsDataLoading } = props;

  useEffect(() => {
    onGetProductsData();
  }, [onGetProductsData]);

  console.log(props);

  const products =
    productsData &&
    productsData.map((product) => {
      console.log(product);
      const { _id: id, ...rest } = product;
      return <Card type="product" id={id} {...rest} />;
    });
  return (
    <HomeWrapper>
      <h1>Home</h1>
      <h2>Filters</h2>
      <div>{!productsDataLoading && products}</div>
    </HomeWrapper>
  );
};
