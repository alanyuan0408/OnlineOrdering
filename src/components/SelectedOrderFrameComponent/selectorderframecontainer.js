import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import SelectedOrderFrame from "./selectorderframecomponent";
import { addOrder, clearOrders } from "../../actions/index";

const mapStateToProps = (state) => {
	let defaultState = {
		orders: state.orders
	};
  return defaultState;
};

const mapDispatchToProps = dispatch => {
  return {
  	addOrder: () => dispatch(addOrder()),
    clearOrders: () => dispatch(clearOrders())
  };
};

const SelectOrderFrameContainer = connect(mapStateToProps, mapDispatchToProps)(SelectedOrderFrame);

export default SelectOrderFrameContainer;