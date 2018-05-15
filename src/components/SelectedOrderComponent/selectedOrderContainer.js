import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import SelectedOrder from "./selectedOrderComponent";
import { clearOrders } from "../../actions/index";

const mapStateToProps = (state, props) => {
	const defaultState = {
		AwsBaseUrl: props.AwsBaseUrl,
		quantity: props.quantity,
		title: props.itemTitle,
		description: props.itemDescription
	};
  return defaultState;
};



const selectedOrderContainer = connect(mapStateToProps)(SelectedOrder);

export default selectedOrderContainer;