import { connect } from "react-redux";
import { getUserData } from "actions";
import { Home } from "components/pages";

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

export const HomeReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
