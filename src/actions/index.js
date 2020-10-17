import axios from "axios";

// Actions
export const USER_LOADING_SUCCESS = "LOADING_SUCCESS";
export const USER_LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS";
export const USER_LOADING_ERROR = "LOADING_ERROR";
export const USER_CLEAR_DATA = "CLEAR_DATA";

// Action creators
const userLoadingSuccess = (userData) => {
  return {
    type: USER_LOADING_SUCCESS,
    payload: userData,
  };
};

const userLoadingInProgress = (bool) => {
  return {
    type: USER_LOADING_IN_PROGRESS,
    loading: bool,
  };
};

const userLoadingError = (bool) => {
  return {
    type: USER_LOADING_ERROR,
    error: bool,
  };
};

const userClearData = () => {
  return {
    type: USER_CLEAR_DATA,
    payload: {},
  };
};

export const getUserData = () => {
  return async (dispatch) => {
    dispatch(userClearData());
    dispatch(userLoadingError(false));
    dispatch(userLoadingInProgress(true));

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      };
      const response = await axios.get(
        "https://coding-challenge-api.aerolab.co/user/me",
        { headers }
      );
      const userData = response.data;
      dispatch(userLoadingSuccess(userData));
      dispatch(userLoadingInProgress(false));
    } catch (error) {
      dispatch(userLoadingError(true));
      console.log(error);
    }
  };
};
