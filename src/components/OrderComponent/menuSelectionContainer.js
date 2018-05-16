import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import MenuSelection from "./menuSelectionComponent";
import { addOrder, deleteOrder } from "../../actions/index";

const mapStateToProps = (state, ownProps) => {
	var order = state.orders[ownProps.itemId]

	const defaultState = {
		itemTitle: ownProps.itemTitle,
		itemDescription: ownProps.itemDescription,
		quantity: state.orders[ownProps.itemId].quantity,
      	itemId: ownProps.itemId
	};

  return defaultState;
};

const mapDispatchToProps = dispatch => {
  return {
    addOrder: article => dispatch(addOrder(article)),
    deleteOrder: itemId => dispatch(deleteOrder(itemId)),
  };
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return {
      ...propsFromState,
      ...ownProps,
      ...propsFromDispatch,
      deleteOrder: () => {
      	propsFromDispatch.deleteOrder(propsFromState.itemId)
      }
    };
};
const MenuSelectionContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(MenuSelection);

export default MenuSelectionContainer;