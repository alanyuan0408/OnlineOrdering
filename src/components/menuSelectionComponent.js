import React, { Component } from 'react';
import '../css/App.css';

class MenuSelection extends Component {

  // Individual Menu Selection Component
  constructor(props) {
    super(props);

    this.state = {
      itemTitle: props.itemTitle,
      itemDescription: props.itemDescription,
    };

  };

  render() {
    return (
      <div>
        <p className="menu-title">{this.state.itemTitle}</p>
        <p>{this.state.itemDescription}</p>
      </div>
    );
  }
}

export default MenuSelection;
