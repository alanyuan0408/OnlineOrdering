import { connect } from "react-redux";

import SelectedOrderFrame from "./selectorderframecomponent";
import { clearOrders } from "../../actions/index";

const mapStateToProps = (state, props) => {
	let defaultState = {
		orders: state.orderReducer.orders
	};
  	return defaultState;
};

const mapDispatchToProps = dispatch => {
  	return {
    	clearOrders: () => dispatch(clearOrders())
  	};
};

const SelectOrderFrameContainer = connect(mapStateToProps, mapDispatchToProps)(SelectedOrderFrame);

export default SelectOrderFrameContainer;