import React, { Component } from 'react';
import '../css/App.css';
import MenuItems from '../assets/orderItems';
import MenuSelection from './menuSelectionComponent';

class OrderFrame extends Component {

  // Main Selection Frame for listing the Items
  constructor(props) {
    super(props);

    this.state = MenuItems;

    this.state.orderItems = [];
  };

  render() {

    return (
      <div className="OrderFrame">
        <p className="menu-title">
          Menu Selection
        </p>

        <div>
          {this.state.menuItems.map(item =>
            <MenuSelection itemTitle={item.itemTitle} 
            itemDescription={item.itemDescription}
            key={item.id}/>
          )}
        </div>

        <br/>
      </div>
    );

  }
}

export default OrderFrame;
