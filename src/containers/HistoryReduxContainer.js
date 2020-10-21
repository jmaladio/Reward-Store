import { connect } from "react-redux";
import { getUserHistory } from "actions";
import { History } from "components/pages/History";

const mapStateToProps = (state) => {
  const {
    loading: userHistoryLoading,
    error: userHistoryError,
    data: userHistory,
  } = state.API_REQUEST.getUserHistory;

  const { data: userData } = state.API_REQUEST.getUserData;

  return {
    userData,
    userHistoryLoading,
    userHistoryError,
    userHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserHistory: () => dispatch(getUserHistory()),
  };
};

export const HistoryReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
