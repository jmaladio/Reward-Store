import {
  GET_REQUEST_STARTED,
  GET_REQUEST_SUCCEEDED,
  GET_REQUEST_FAILED,
} from "actions";

const initialState = {
  getUserData: {
    loading: false,
    error: false,
    data: null,
  },
  getPurchaseHistory: {
    loading: false,
    error: false,
    data: null,
  },
  getProductsData: {
    loading: false,
    error: false,
    data: null,
  },
  postPointsToUser: {},
  postPurchaseToHistory: {},
};

const API_GET_REQUEST = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST_STARTED:
      return {
        ...state,
        [action.payload.id]: {
          loading: true,
          error: false,
          data: null,
        },
      };
    case GET_REQUEST_SUCCEEDED:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          error: false,
          data: action.payload.data,
        },
      };
    case GET_REQUEST_FAILED:
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

const API_POST_REQUEST = (state = initialState, action) => {
  switch (action.type) {
    case "piripi": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

const rootReducer = {
  API_GET_REQUEST,
};

export default rootReducer;
