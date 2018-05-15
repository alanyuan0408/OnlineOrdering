import React, { Component } from 'react';
import '../../css/App.css';

class SelectedOrder extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <div>
          <p>{this.props.itemTitle}: {this.props.quantity}</p>

          <p>{this.props.itemDescription}</p>
        </div>
      </div>
    );
  }
}

export default SelectedOrder;
