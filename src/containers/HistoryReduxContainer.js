import { connect } from "react-redux";
import { getPurchaseHistory } from "actions";
import { History } from "components/pages/History";

const mapStateToProps = (state) => {
  const {
    loading: purchaseHistoryLoading,
    error: purchaseHistoryError,
    data: purchaseHistory,
  } = state.API_REQUEST.getPurchaseHistory;

  const { data: userData } = state.API_REQUEST.getUserData;

  return {
    userData,
    purchaseHistoryLoading,
    purchaseHistoryError,
    purchaseHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPurchaseHistory: () => dispatch(getPurchaseHistory()),
  };
};

export const HistoryReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
