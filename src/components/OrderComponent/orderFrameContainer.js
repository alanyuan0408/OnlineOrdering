import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import OrderFrame from "./orderFrameComponent";
import { clearArticles } from "../../actions/index";

const mapStateToProps = (state) => {
	let defaultState = {
		articles: state.articles
	};
  return defaultState;
};

const mapDispatchToProps = dispatch => {
  return {
    clearArticles: () => dispatch(clearArticles())
  };
};

const OrderFrameContainer = connect(mapStateToProps)(OrderFrame);

export default OrderFrameContainer;