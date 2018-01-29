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
      </div>
    );
  }
}

export default MenuSelection;
