import React, { Component } from 'react';
import '../css/App.css';

class MenuSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemTitle: "",
      itemDescription: "",
      menuItems: []
    };

  };

  render() {
    return (
        <p className="menu-title">{this.state.title}</p>

    );
  }
}

export default MenuSelection;
