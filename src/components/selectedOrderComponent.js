import React, { Component } from 'react';
import '../css/App.css';

class SelectedOrder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      quantity: props.quantity
    }

  };

  render() {
    return (
      <div>
        <p>{this.state.title}: {this.state.quantity}</p>

        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default SelectedOrder;
