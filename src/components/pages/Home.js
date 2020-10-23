import React, { useEffect } from "react";

export const Home = (props) => {
  const { onGetProductsData, onPostUserPoints, newPoints } = props;

  useEffect(() => {
    onGetProductsData();
  }, [onGetProductsData]);

  console.log(props);

  return (
    <>
      <h1>Home</h1>
      <div>
        <h2>[Temp buttons]</h2>
        <button onClick={() => onPostUserPoints(1000)}>Add 1000 points</button>
        <button onClick={() => onPostUserPoints(5000)}>Add 5000 points</button>
        <button onClick={() => onPostUserPoints(7500)}>Add 7500 points</button>
        <p>{newPoints && `Updated points: ${newPoints["New Points"]}`}</p>
      </div>
    </>
  );
};
