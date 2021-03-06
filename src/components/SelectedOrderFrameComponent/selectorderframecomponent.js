import React, { Component } from 'react';
import '../../css/App.css';

import SelectedOrderContainer from '../SelectedOrderComponent/selectedOrderContainer';

class SelectedOrderFrame extends Component {

    render() {
        return (
            <div>
                <p>Selected Items:</p>

                {this.props.orders.map(item =>
                    <SelectedOrderContainer
                        itemId={item.itemId}
                        itemTitle={item.itemTitle}
                        itemDescription={item.itemDescription}
                        key = {item.itemId}
                    />
                )}

                <button onClick= {this.props.clearOrders}>Clear Orders</button>
            </div>
        );
    }
}

export default SelectedOrderFrame;
