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
    this.updateItem = this.updateItem.bind(this);
  };

  parentCallBack(dataFromChild) {
    var rtrArray = this.updateItem(dataFromChild);
    this.setState({orderItems: rtrArray});
  }

  updateItem(newItem) {
    var newArray = [];
    if (this.state.orderItems.length == 0){
      newArray.push(newItem);

      return newArray;
    }

    for (var element in this.state.orderItems){
      if (element.title == newItem.itemTitle){
        console.log(newItem);
        newArray.push(newItem);
      } else {
        console.log(element);
        newArray.push(element);
      }
    }
    return newArray;
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
