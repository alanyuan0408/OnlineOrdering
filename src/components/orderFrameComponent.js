import React, { Component } from 'react';
import '../css/App.css';

data = [
	{ Menu}
]

class OrderFrame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemTitle: "",
      itemDescription: "",
      menuItems: []
    };

  	this.addMenuItem = this.addMenuItem.bind(this);

  };

  addMenuItem(Item){
    var myItems = this.state.menuItems;
    myItems.push(Item)
    this.setState({menuItems: myItems})
  }

  render() {
    return (
        <p className="menu-title">
          Menu Selection
        </p>


    );
  }
}

export default OrderFrame;
