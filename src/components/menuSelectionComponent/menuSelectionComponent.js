import React, { Component } from 'react';
import '../../css/App.css';

import store from "../../stores/index";
import { addArticle } from "../../actions/index";

class MenuSelection extends Component {

  constructor() {
      super();
  }

  parentCallBack(){
    var orderPackage = {};
    orderPackage.id = Math.floor(Math.random() * 2000);
    orderPackage.title = this.props.itemTitle;
    orderPackage.quantity = this.props.numberSelected;

    this.props.addArticle();
  };


  render() {
    return (
      <div className="menu-selection">
        <h3>{this.props.itemTitle}</h3>
        <p>{this.props.articles}</p>
        <p>{this.props.itemDescription}</p>
        <input placeholder="Quantity"
          defaultValue={this.props.defaultValue}
          type="number" step="1" min="0" max="20"/>
        <button onClick= {this.parentCallBack}>Place Order </button>
      </div>
    );
  }
}

export default MenuSelection;
