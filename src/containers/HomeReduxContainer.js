import { connect } from "react-redux";
import { getProductsData, postUserPoints } from "actions";
import { Home } from "components/pages/Home";

const mapStateToProps = (state) => {
  const {
    loading: productsDataLoading,
    error: productsDataError,
    data: productsData,
  } = state.API_REQUEST.getProductsData;
  const { data: userData } = state.API_REQUEST.getUserData;
  const {
    loading: addingPoints,
    error: errorAddingPoints,
    data: newPoints,
  } = state.API_REQUEST.postPointsToUser;
  return {
    userData,
    productsDataLoading,
    productsDataError,
    productsData,
    addingPoints,
    errorAddingPoints,
    newPoints,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProductsData: () => dispatch(getProductsData()),
    onPostUserPoints: (points) => dispatch(postUserPoints(points)),
  };
};

export const HomeReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
