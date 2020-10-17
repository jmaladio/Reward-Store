import { connect } from "react-redux";
import { getUserData } from "actions";
import { Header } from "components/common/Header";

const mapStateToProps = (state) => {
  return {
    loading: state.userLoadingInProgress,
    error: state.userLoadingError,
    userData: state.userData,
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
