import { connect } from "react-redux";
import { getUserData } from "actions";
import { Header } from "components/common/Header";

const mapStateToProps = (state) => {
  const {
    loading: userDataLoading,
    error: userDataError,
    data: userData,
  } = state.API_REQUEST.getUserData;
  const {
    loading: addingPoints,
    error: errorAddingPoints,
    data: newPoints,
  } = state.API_REQUEST.postPointsToUser;
  return {
    userDataLoading,
    userDataError,
    userData,
    addingPoints,
    errorAddingPoints,
    newPoints,
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
