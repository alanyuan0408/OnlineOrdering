import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import OrderFrame from "./orderFrameComponent";
import { clearOrders } from "../../actions/index";

const mapStateToProps = (state, props) => {
	const defaultState = {
		menuItems: props.MenuItems,
		AwsBaseUrl: props.AwsBaseUrl
	};
  return defaultState;
};

const mapDispatchToProps = dispatch => {
  return {
    clearOrders: () => dispatch(clearOrders())
  };
};

const OrderFrameContainer = connect(mapStateToProps, mapDispatchToProps)(OrderFrame);

export default OrderFrameContainer;