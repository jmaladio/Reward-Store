import { connect } from "react-redux";
import { getUserData } from "actions";
import { Header } from "components/common/Header";

const mapStateToProps = (state) => {
  const {
    loading: userDataLoading,
    error: userDataError,
    data: userData,
  } = state.API_REQUEST.getUserData;
  return {
    userDataLoading,
    userDataError,
    userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserData: () => dispatch(getUserData()),
  };
};

export const HeaderReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
