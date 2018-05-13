import React, { Component } from 'react';
import axios from 'axios';
import '../../css/App.css';

import SelectedOrderContainer from '../SelectedOrderComponent/selectedOrderContainer';

class SelectedOrderFrame extends Component {

  // Main Selection Frame for listing the Items
  constructor() {
    super();
  };

  render() {
    return (
      <div>
          <p>Selected Items:</p>
            {this.props.orders.map(item =>
              <SelectedOrderContainer title={item.title}
                quantity={item.quantity}
                key={item.id}
              />
            )}
          <br></br>

          <button onClick= {this.props.sendOrder}>Send Order</button>
          <button onClick= {this.props.clearOrders}>Clear Orders</button>
      </div>
    );

  }
}

export default SelectedOrderFrame;
