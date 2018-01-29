import React, { Component } from 'react';
import '../css/App.css';

class MenuSelection extends Component {

  // Individual Menu Selection Component
  constructor(props) {
    super(props);

    this.state = {
      itemTitle: props.itemTitle,
      itemDescription: props.itemDescription,
      numberSelected: 0
    };
  };

  render() {
    return (
      <div className="menu-selection">
        <h3>{this.state.itemTitle}</h3>
        <p>{this.state.itemDescription}</p>
        <input placeholder="Quantity" 
          defaultValue={this.state.numberSelected}
          type="number" step="0" min="0" max="20"/>
        <button type="button">Place Order </button>
      </div>
    );
  }
}

export default MenuSelection;
