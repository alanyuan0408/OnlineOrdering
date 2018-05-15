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
      this.handleValueChange = this.handleValueChange.bind(this);
  }

  placeOrder(){
    var orderPackage = {};
    orderPackage.itemTitle = this.props.itemTitle;
    orderPackage.quantity = this.state.selectedValue;

    this.props.addOrder(orderPackage);
  };

  handleValueChange(value){
    this.setState({selectedValue: value});
  }
 
  render() {
    return (
      <div className="menu-selection">
        <h3>{this.props.itemTitle}</h3>
        <p>{this.props.itemDescription}</p>
        <input placeholder="Quantity"
          value={this.state.selectedValue}
          onChange={e => this.handleValueChange(e.target.value)}
          type="number" step="1" min="0" max="20"/>
        <button onClick= {this.placeOrder}>Place Order </button>
      </div>
    );
  }
}

export default MenuSelection;
