import React from "react";
import styled from "styled-components";

const ProductCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 16rem;
  height: 20rem;
  border: 2px solid darkgrey;
  padding: 16px;
  margin: 32px 16px 0 16px;
  background-color: lightgray;
  align-items: center;

  > div {
    width: 12rem;
    height: 12rem;
    border-radius: 100%;
    background-color: #fff;
    position: relative;
    overflow: hidden;

    > img {
      width: 80%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const UserCard = styled.div``;

export const Card = (props) => {
  if (props.type === "product") {
    const { name, cost, img } = props;
    return (
      <ProductCard>
        <div>
          <img src={img.url} alt={name} />
        </div>
        <h2>{name}</h2>
        <span>{cost}</span>
      </ProductCard>
    );
  } else if (props.type === "user") {
    return <UserCard>User Card</UserCard>;
  } else return <div>Card</div>;
};
