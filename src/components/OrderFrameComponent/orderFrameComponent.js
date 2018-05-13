import React, { Component } from 'react';
import axios from 'axios';
import '../../css/App.css';

import MenuSelectionContainer from '../OrderComponent/menuSelectionContainer';

class OrderFrame extends Component {

  // Main Selection Frame for listing the Items
  constructor(props) {
    super(props);
  };


  render() {

    return (

        <div>
          {this.props.menuItems.map(item =>
            <MenuSelectionContainer
                itemTitle={item.itemTitle}
                itemDescription={item.itemDescription}
                key={item.id}
            />
          )}
        </div>
    );
  }
}

export default OrderFrame;
