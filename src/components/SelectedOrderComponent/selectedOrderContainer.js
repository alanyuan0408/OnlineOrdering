import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import OrderFrame from "./orderFrameComponent";
import { clearOrders } from "../../actions/index";

const mapStateToProps = (state, props) => {
	const defaultState = {
		AwsBaseUrl: props.AwsBaseUrl
	};
  return defaultState;
};


const selectedOrderContainer = connect(mapStateToProps)(OrderFrame);

export default selectedOrderContainer;