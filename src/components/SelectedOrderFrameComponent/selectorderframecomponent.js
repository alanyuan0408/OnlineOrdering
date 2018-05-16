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
              <SelectedOrderContainer
                itemId={item.itemId}
              />
            )}

          <button onClick= {this.props.clearOrders}>Clear Orders</button>
          <br></br>
      </div>
    );

  }
}

export default SelectedOrderFrame;
