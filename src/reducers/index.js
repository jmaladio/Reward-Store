import { REQUEST_STARTED, REQUEST_SUCCEEDED, REQUEST_FAILED } from "actions";

const initialState = {
  getUserData: {
    loading: false,
    error: false,
    data: null,
  },
  getUserHistory: {
    loading: false,
    error: false,
    data: null,
  },
  getProductsData: {
    loading: false,
    error: false,
    data: null,
  },
};

const API_REQUEST = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        [action.payload.id]: {
          loading: true,
          error: false,
          data: null,
        },
      };
    case REQUEST_SUCCEEDED:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          error: false,
          data: action.payload.data,
        },
      };
    case REQUEST_FAILED:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          error: true,
          data: null,
        },
      };
    default:
      return state;
  }
};

const rootReducer = {
  API_REQUEST,
};

export default rootReducer;
