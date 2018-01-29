import React, { Component } from 'react';
import '../css/App.css';
import MenuItems from '../assets/orderItems';
import MenuSelection from './menuSelectionComponent';

class OrderFrame extends Component {

  // Main Selection Frame for listing the Items
  constructor(props) {
    super(props);

    this.state = {
      menuItems: MenuItems
    };

    console.log(typeof(this.state.menuItems));

  };

  render() {

    return (
      <div>
        <p className="menu-title">
          Menu Selection
        </p>
      </div>
    );

  }
}

export default OrderFrame;
