import React, { Component } from 'react';
import '../../css/App.css';
import { Link } from "react-router-dom";

class SelectedOrder extends Component {

  constructor() {
    super();
  };

  render() {
    return (
      <div>
        { this.props.quantity > 0 ? (

            <div>
              <p>{this.props.itemTitle}: {this.props.quantity} (
                <a onClick={this.props.deleteOrder} >Remove Order</a>
              )</p>
            </div>

          ) : null
        }
      </div>
    );
  }
}

export default SelectedOrder;
