import { connect } from "react-redux";

import MenuSelection from "./menuSelectionComponent";
import { addOrder, deleteOrder } from "../../actions/index";

const mapStateToProps = (state, ownProps) => {

	const defaultState = {
		itemTitle: ownProps.itemTitle,
		itemDescription: ownProps.itemDescription,
		quantity: state.orderReducer.orders[ownProps.itemId].quantity,
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