import React, { Component } from 'react';
import '../../css/App.css';

class SelectedOrder extends Component {

  render() {
    return (
        <div className="col-8">
            { this.props.quantity > 0 ? (

                <div>
                    <p>{this.props.itemTitle}: {this.props.quantity} (
                        <a onClick={this.props.deleteOrder} >Remove Order</a>
                    )</p>
                </div>

            ) : null }
      </div>
    );
  }
}

export default SelectedOrder;
