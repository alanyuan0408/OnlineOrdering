import React from "react";
import { connect } from "react-redux";
import store from "../../stores/index";

import { MenuSelection } from "./menuSelectionComponent";
import { addArticle } from "../../actions/index";

const mapStateToProps = (state, ownProps) => {
	let defaultState = {
		  itemTitle: ownProps.itemTitle,
		  itemDescription: ownProps.itemDescription,
    	articles: state.articles
	};

  	return defaultState;
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};

const mergeProps = (state, dispatchProps, ownProps) => {
  return {
    itemTitle: ownProps.match.params.itemTitle,
    itemDescription: ownProps.match.params.itemDescription,
    articles: state.articles,

    addArticle: () => {
      dispatchProps.dispatch(
        addArticle(state)
      )
    }
  }
}

const menuSelection = connect(mapStateToProps, mapDispatchToProps, mergeProps)(MenuSelection);

export default menuSelection;