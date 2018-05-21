import { connect } from "react-redux";
import OrderFrame from "./orderFrameComponent";

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