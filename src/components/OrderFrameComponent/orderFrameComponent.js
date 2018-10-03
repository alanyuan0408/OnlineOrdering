import React, { Component } from 'react';
import '../../css/App.css';

import MenuSelectionContainer from '../OrderComponent/menuSelectionContainer';

class OrderFrame extends Component {

    constructor(props) {
        super(props);

        console.log(props)

        this.state = {
            menuItemLeft: [],
            menuItemsRight: []
        }

        this.splitItems = this.splitItems.bind(this);
    }

    componentDidMount(props) {
        console.log(props);
        this.splitItems(props.menuItems);
    }

    splitItems(menuItems) {
        var menuItemA = [];
        var menuItemB =[];
        var itr = 0;

        for (var item in menuItems) {
            if (itr % 2 == 0) {
                menuItemA.push(menuItems[itr]);
            } else {
                menuItemB.push(menuItems[itr]);
            }
            itr += 1
        }

        this.setstate({
            menuItemLeft: menuItemA,
            menuItemsRight: menuItemB
        });

        console.log(this.state);
    }

    render() {

        return (
            <div className="row">
                <div className="col-4">
                    <h2>{this.props.title}</h2>
                </div>

                <div className="col-4">
                    {this.state.menuItemLeft.map(item =>
                        <MenuSelectionContainer
                            itemTitle={item.itemTitle}
                            itemDescription={item.itemDescription}
                            itemId={item.id}
                            key={item.id}
                        />
                    )}
                </div>

                <div className="col-4">
                    {this.state.menuItemsRight.map(item =>
                        <MenuSelectionContainer
                            itemTitle={item.itemTitle}
                            itemDescription={item.itemDescription}
                            itemId={item.id}
                            key={item.id}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default OrderFrame;
