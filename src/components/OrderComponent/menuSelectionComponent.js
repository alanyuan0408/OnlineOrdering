import React, { Component } from 'react';
import '../../css/App.css';

class MenuSelection extends Component {

    constructor(props) {
        super(props);

        this.state ={
            selectedValue: 0
        }

        this.placeOrder = this.placeOrder.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    placeOrder(){
        var orderPackage = {};
        orderPackage.itemTitle = this.props.itemTitle;
        orderPackage.quantity = this.state.selectedValue;
        orderPackage.itemId = this.props.itemId;

        this.props.addOrder(orderPackage);
    };

    handleValueChange(value){
        this.setState({selectedValue: value});
    }

    render() {
        return (
            <div className="menu-selection">
                <h3>{this.props.itemTitle}</h3>
                <p>{this.props.itemDescription}</p>
                
                <input defaultValue = {this.props.quantity}
                    value = {this.state.selectedValue}
                    onChange = {e => 
                        this.handleValueChange(e.target.value)
                    }
                    type="number" step="1" min="0" max="20"
                />

                <button onClick= {this.placeOrder}>
                    { this.props.quantity === 0 ? "Place Order" : "Modify Order"}
                </button>
                <button onClick= {this.props.deleteOrder}>Delete Order </button>
            </div>
        );
    }
}

export default MenuSelection;
