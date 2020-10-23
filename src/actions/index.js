import axios from "axios";

// Actions
export const REQUEST_STARTED = "REQUEST_STARTED";
export const REQUEST_SUCCEEDED = "REQUEST_SUCCEEDED";
export const REQUEST_FAILED = "REQUEST_FAILED";

// Action creators
const requestStarted = (id) => {
  return {
    type: REQUEST_STARTED,
    payload: { id },
  };
};

const requestSucceeded = (id, data) => {
  return {
    type: REQUEST_SUCCEEDED,
    payload: { id, data },
  };
};

const requestFailed = (id) => {
  return {
    type: REQUEST_FAILED,
    payload: { id },
  };
};

export const getUserData = () => {
  const id = "getUserData";
  return async (dispatch) => {
    dispatch(requestStarted(id));

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      };
      const response = await axios.get(
        "https://private-13dfc-aerolabchallenge.apiary-proxy.com/user/me",
        { headers }
      );
      const userData = response.data;
      dispatch(requestSucceeded(id, userData));
    } catch (error) {
      dispatch(requestFailed(id));
      console.log(error);
    }
  };
};

export const getPurchaseHistory = () => {
  const id = "getPurchaseHistory";
  return async (dispatch) => {
    dispatch(requestStarted(id));

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      };
      const response = await axios.get(
        "https://private-13dfc-aerolabchallenge.apiary-proxy.com/user/history",
        { headers }
      );
      const purchaseHistory = response.data;
      dispatch(requestSucceeded(id, purchaseHistory));
    } catch (error) {
      dispatch(requestFailed(id));
      console.log(error);
    }
  };
};

export const getProductsData = () => {
  const id = "getProductsData";
  return async (dispatch) => {
    dispatch(requestStarted(id));

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      };
      const response = await axios.get(
        "https://private-13dfc-aerolabchallenge.apiary-proxy.com/products",
        { headers }
      );
      const productsData = response.data;
      dispatch(requestSucceeded(id, productsData));
    } catch (error) {
      dispatch(requestFailed(id));
      console.log(error);
    }
  };
};

export const postUserPoints = (points) => {
  const id = "postPointsToUser";
  return async (dispatch) => {
    dispatch(requestStarted(id));

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      };
      const response = await axios.post(
        "https://private-13dfc-aerolabchallenge.apiary-proxy.com/user/points",
        { amount: points },
        { headers }
      );
      const productsData = response.data;
      dispatch(requestSucceeded(id, productsData));
    } catch (error) {
      dispatch(requestFailed(id));
      console.log(error);
    }
  };
};
