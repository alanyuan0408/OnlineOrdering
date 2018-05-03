import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import { MenuSelection } from "./menuSelectionComponent";
import { addArticle } from "../../actions/index";

const mapStateToProps = (state, ownProps) => {
	let defaultState = {
		  itemTitle: ownProps.itemTitle,
		  itemDescription: ownProps.itemDescription,
    	articles: store.articles
	};

  	return defaultState;
};

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

const menuSelection = connect(mapStateToProps, mapDispatchToProps)(MenuSelection);

export default menuSelection;