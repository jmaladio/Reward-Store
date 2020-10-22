import { connect } from "react-redux";
import { getProductsData } from "actions";
import { Home } from "components/pages/Home";

const mapStateToProps = (state) => {
  const {
    loading: productsDataLoading,
    error: productsDataError,
    data: productsData,
  } = state.API_GET_REQUEST.getProductsData;
  const { data: userData } = state.API_GET_REQUEST.getUserData;
  return {
    userData,
    productsDataLoading,
    productsDataError,
    productsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProductsData: () => dispatch(getProductsData()),
  };
};

export const HomeReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
