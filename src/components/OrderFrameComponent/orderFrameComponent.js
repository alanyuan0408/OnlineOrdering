import React, { Component } from 'react';
import '../../css/App.css';

import MenuSelectionContainer from '../OrderComponent/menuSelectionContainer';

class OrderFrame extends Component {

    constructor(props) {
        super(props);

        var menuItemA = [];
        var menuItemB =[];
        var itr = 0;

        for (var item in props.menuItems) {
            if (itr % 2 == 0) {
                menuItemA.push(props.menuItems[itr]);
            } else {
                menuItemB.push(props.menuItems[itr]);
            }
            itr += 1
        }

        this.state = {
            menuItemLeft: menuItemA,
            menuItemsRight: menuItemB
        };

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
