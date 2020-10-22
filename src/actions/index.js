import axios from "axios";

// Actions
export const GET_REQUEST_STARTED = "GET_REQUEST_STARTED";
export const GET_REQUEST_SUCCEEDED = "GET_REQUEST_SUCCEEDED";
export const GET_REQUEST_FAILED = "GET_REQUEST_FAILED";

// Action creators
const getRequestStarted = (id) => {
  return {
    type: GET_REQUEST_STARTED,
    payload: { id },
  };
};

const getRequestSucceeded = (id, data) => {
  return {
    type: GET_REQUEST_SUCCEEDED,
    payload: { id, data },
  };
};

const getRequestFailed = (id) => {
  return {
    type: GET_REQUEST_FAILED,
    payload: { id },
  };
};

export const getUserData = () => {
  const id = "getUserData";
  return async (dispatch) => {
    dispatch(getRequestStarted(id));

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      };
      const response = await axios.get(
        "https://coding-challenge-api.aerolab.co/user/me",
        { headers }
      );
      const userData = response.data;
      dispatch(getRequestSucceeded(id, userData));
    } catch (error) {
      dispatch(getRequestFailed(id));
      console.log(error);
    }
  };
};

export const getPurchaseHistory = () => {
  const id = "getPurchaseHistory";
  return async (dispatch) => {
    dispatch(getRequestStarted(id));

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      };
      const response = await axios.get(
        "https://coding-challenge-api.aerolab.co/user/history",
        { headers }
      );
      const purchaseHistory = response.data;
      dispatch(getRequestSucceeded(id, purchaseHistory));
    } catch (error) {
      dispatch(getRequestFailed(id));
      console.log(error);
    }
  };
};

export const getProductsData = () => {
  const id = "getProductsData";
  return async (dispatch) => {
    dispatch(getRequestStarted(id));

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      };
      const response = await axios.get(
        "https://coding-challenge-api.aerolab.co/products",
        { headers }
      );
      const productsData = response.data;
      dispatch(getRequestSucceeded(id, productsData));
    } catch (error) {
      dispatch(getRequestFailed(id));
      console.log(error);
    }
  };
};
