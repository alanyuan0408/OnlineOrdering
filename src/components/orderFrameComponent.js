import React, { Component } from 'react';
import '../css/App.css';
import MenuItems from '../assets/orderItems';
import MenuSelection from './menuSelectionComponent';

class OrderFrame extends Component {

  // Main Selection Frame for listing the Items
  constructor(props) {
    super(props);

    this.state = MenuItems;
      
  };

  render() {

    return (
      <div class="OrderFrame">
        <p className="menu-title">
          Menu Selection
        </p>

        <div>
          {this.state.menuItems.map(item =>
            <MenuSelection itemTitle={item.itemTitle} itemDescription={item.itemDescription} />
          )}
        </div>
      </div>
    );

  }
}

export default OrderFrame;
