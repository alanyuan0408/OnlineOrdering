import React, { Component } from 'react';
import '../css/App.css';
import MenuItems from '../assets/orderItems';
import MenuSelection from './menuSelectionComponent';
import SelectedOrder from './selectedOrderComponent';

class OrderFrame extends Component {

  // Main Selection Frame for listing the Items
  constructor(props) {
    super(props);

    this.state = MenuItems;
    this.state.orderItems = [];

    this.parentCallBack = this.parentCallBack.bind(this);
  };

  parentCallBack(dataFromChild) {
    var new_array = []
    var array = this.state.orderItems;

    if (array.length == 0){
      if (dataFromChild.quantity > 0){
        new_array.push(dataFromChild);
      }

    } else {
      var modified = false;
      for (var item = 0; item < array.length; item++){
        if (array[item].title == dataFromChild.title){
          // Case we are updating the array
          if (dataFromChild.quantity > 0){
            new_array.push(dataFromChild);
          }
          var modified = true;
        } else {
          var newItem = array[item]
          new_array.push(newItem);
        }
      }

      if (!modified){
        if (dataFromChild.quantity > 0){
          new_array.push(dataFromChild);
        }
      }

    }
    this.setState({orderItems: new_array});
  }

  render() {

    return (
      <div className="OrderFrame">
        <p className="menu-title">
          Menu Selection
        </p>
        <div>
          <p>Selected Items:</p>
          {this.state.orderItems.map(item =>
            <SelectedOrder title={item.title}
            quantity={item.quantity}
            key={item.id}/>
          )}
        </div>

        <div>
          {this.state.menuItems.map(item =>
            <MenuSelection itemTitle={item.itemTitle} 
            itemDescription={item.itemDescription}
            callbackFromParent={this.parentCallBack}
            key={item.id}/>
          )}
        </div>

        <br/>
      </div>
    );

  }
}

export default OrderFrame;
