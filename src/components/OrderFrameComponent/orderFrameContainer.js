import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import OrderFrame from "./orderFrameComponent";
import { clearOrders } from "../../actions/index";

const mapStateToProps = (state, props) => {
	const defaultState = {
		menuItems: props.MenuItems,
		AwsBaseUrl: props.AwsBaseUrl,
		title: props.Title
	};
  return defaultState;
};

const OrderFrameContainer = connect(mapStateToProps)(OrderFrame);

export default OrderFrameContainer;