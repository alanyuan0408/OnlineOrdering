import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import MenuItems from '../assets/orderItems';
import MenuSelection from './menuSelectionComponent';
import SelectedOrder from './selectedOrderComponent';

var gatewayURl = "https://3t34qsne28.execute-api.us-east-2.amazonaws.com/AlanStage"

class OrderFrame extends Component {

  // Main Selection Frame for listing the Items
  constructor(props) {
    super(props);

    this.state = MenuItems;
    this.state.orderItems = [];

    this.parentCallBack = this.parentCallBack.bind(this);
    this.sendOrder = this.sendOrder.bind(this);
  };

  sendOrder(){
    axios.post(gatewayURl).then(function(response) {
      console.log(response);
      console.log("Send Response");
    });
  }

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
          <br/>
          <button onClick= {this.sendOrder}>Send Order</button>
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
