import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import SelectedOrder from "./selectedOrderComponent";
import { clearOrders } from "../../actions/index";

const mapStateToProps = (state, props) => {
	const defaultState = {
		quantity: props.quantity,
		itemTitle: props.itemTitle,
	};
  return defaultState;
};

const selectedOrderContainer = connect(mapStateToProps)(SelectedOrder);

export default selectedOrderContainer;