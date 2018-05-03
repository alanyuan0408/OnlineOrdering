import React, { Component } from 'react';
import '../../css/App.css';
import uuidv1 from "uuid";

class MenuSelection extends Component {

  constructor() {
      super();

      this.state ={
        selectedValue: 0
      }

      this.placeOrder = this.placeOrder.bind(this);
  }

  placeOrder(){
    var orderPackage = {};
    orderPackage.id = Math.floor(Math.random() * 2000);
    orderPackage.title = this.props.itemTitle;
    orderPackage.quantity = this.props.itemDescription;

    const { title } = this.state;
    const id = uuidv1();

    this.props.addArticle({title, id});
  };


  render() {
    return (
      <div className="menu-selection">
        <h3>{this.props.itemTitle}</h3>
        <p>{this.props.articles}</p>
        <p>{this.props.itemDescription}</p>
        <input placeholder="Quantity"
          value={this.state.selectedValue}
          type="number" step="1" min="0" max="20"/>
        <button onClick= {this.placeOrder}>Place Order </button>
      </div>
    );
  }
}

export default MenuSelection;
