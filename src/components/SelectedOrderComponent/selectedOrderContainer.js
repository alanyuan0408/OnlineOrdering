import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import SelectedOrder from "./selectedOrderComponent";
import { deleteOrder } from "../../actions/index";

const mapStateToProps = (state, props) => {
	var order = state.orders[props.itemId]

	const defaultState = {
		quantity: order.quantity,
		itemTitle: order.itemTitle,
		itemId: order.itemId
	};
  return defaultState;
};

const mapDispatchToProps = dispatch => {
  return {
    deleteOrder: article => dispatch(deleteOrder(article))
  };
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return {
        deleteOrder: propsFromDispatch.deleteOrder(propsFromState.itemId)
    };
};
const selectedOrderContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(SelectedOrder);

export default selectedOrderContainer;