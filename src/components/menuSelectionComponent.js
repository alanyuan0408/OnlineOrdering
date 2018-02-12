import React, { Component } from 'react';
import '../css/App.css';

class MenuSelection extends Component {

  // Individual Menu Selection Component
  constructor(props) {
    super(props);

    this.state = {
      itemTitle: props.itemTitle,
      itemDescription: props.itemDescription,
      numberSelected: 0,
      defaultValue: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.parentCallBack = this.parentCallBack.bind(this);
  };

  parentCallBack(){
    var orderPackage = {};
    orderPackage.id = Math.floor(Math.random() * 2000);
    orderPackage.title = this.state.itemTitle;
    orderPackage.quantity = this.state.numberSelected;

    this.props.callbackFromParent(orderPackage);
  };

  handleChange(e){
    this.setState({numberSelected: e.target.value})
  };

  render() {
    return (
      <div className="menu-selection">
        <h3>{this.state.itemTitle}</h3>
        <p>{this.state.itemDescription}</p>
        <input placeholder="Quantity" 
          defaultValue={this.state.defaultValue}
          type="number" step="1" min="0" max="20"
          value={this.state.numberSelected}
          onChange={this.handleChange}/>
        <button onClick={this.parentCallBack}>Place Order </button>
      </div>
    );
  }
}

export default MenuSelection;
