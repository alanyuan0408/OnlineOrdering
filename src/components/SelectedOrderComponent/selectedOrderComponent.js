import React, { Component } from 'react';
import '../../css/App.css';

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
                <a>Remove Order</a>
              )</p>
            </div>

          ) : null
        }
      </div>
    );
  }
}

export default SelectedOrder;
