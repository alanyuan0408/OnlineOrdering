import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import { MenuSelection } from "./menuSelectionComponent";


const mapStateToProps = (state, props) => {
	let defaultState = {
		itemTitle: props.itemTitle,
		itemDescription: props.itemDescription,
		numberSelected: 0,
    	defaultValue: 0,
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