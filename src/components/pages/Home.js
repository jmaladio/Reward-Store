import React, { useEffect } from "react";
import styled from "styled-components";

import { usePagination } from "hooks";
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

  const productsWithPagination = usePagination(productsData);

  const productsToRender =
    Object.entries(productsWithPagination).length &&
    productsWithPagination.getCurrentItems().map((product) => {
      const { _id: id, ...rest } = product;
      return <Card type="product" key={id} {...rest} />;
    });

  return (
    <HomeWrapper>
      <h1>Home</h1>
      <h2>Filters</h2>
      <div>
        <button onClick={() => productsWithPagination.prevPage()}>Prev</button>
        <button onClick={() => productsWithPagination.nextPage()}>Next</button>
      </div>
      <div>
        {productsDataLoading ? <span>Loading...</span> : productsToRender}
      </div>
    </HomeWrapper>
  );
};
