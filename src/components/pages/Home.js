import React, { useEffect } from "react";

export const Home = (props) => {
	const { onGetProductsData } = props

	useEffect(() => {
		onGetProductsData()
	}, [onGetProductsData])
		console.log(props)
  return (
    <>
      <h1>Home</h1>
    </>
  );
};
