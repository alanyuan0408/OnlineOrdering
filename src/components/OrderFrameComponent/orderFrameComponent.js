import React, { Component } from 'react';
import '../../css/App.css';

import MenuSelectionContainer from '../OrderComponent/menuSelectionContainer';

class OrderFrame extends Component {

  render() {

    return (

        <div>
          <h2>{this.props.title}</h2>

          {this.props.menuItems.map(item =>
            <MenuSelectionContainer
                itemTitle={item.itemTitle}
                itemDescription={item.itemDescription}
                itemId={item.id}
                key={item.id}
            />
          )}
        </div>
    );
  }
}

export default OrderFrame;
