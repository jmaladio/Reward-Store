import {
  USER_LOADING_SUCCESS,
  USER_LOADING_IN_PROGRESS,
  USER_LOADING_ERROR,
  USER_CLEAR_DATA,
} from "actions";

const userLoadingInProgress = (state = true, action) => {
  switch (action.type) {
    case USER_LOADING_IN_PROGRESS:
      return action.loading;
    default:
      return state;
  }
};

const userLoadingError = (state = false, action) => {
  switch (action.type) {
    case USER_LOADING_ERROR:
      return action.error;
    default:
      return state;
  }
};

const userData = (state = {}, action) => {
  switch (action.type) {
    case USER_LOADING_SUCCESS:
      return action.payload;
    case USER_CLEAR_DATA:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = {
  userLoadingInProgress,
  userLoadingError,
  userData,
};

export default rootReducer;
