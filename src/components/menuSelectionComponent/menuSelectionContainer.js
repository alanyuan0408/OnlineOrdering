import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import MenuSelection from "./menuSelectionComponent";
import { addArticle } from "../../actions/index";

const mapStateToProps = (state, ownProps) => {
	let defaultState = {
		itemTitle: ownProps.itemTitle,
		itemDescription: ownProps.itemDescription,
      	id: ownProps.id
	};

  return defaultState;
};

const mapDispatchToProps = dispatch => {
  return {
    testArticle: article => dispatch(addArticle(article))
  };
};

const MenuSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(MenuSelection);

export default MenuSelectionContainer;