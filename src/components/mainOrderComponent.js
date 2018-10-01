import React, { Component } from 'react';
import '../css/App.css';
import { Switch, Route } from "react-router-dom";

// Initialization Values
import { PizzaInfo, DrinkInfo, SideItemInfo } from '../assets/MenuItems';
import OrderFrameContainer from './OrderFrameComponent/orderFrameContainer'        

class MainOrderComponent extends Component {

	render() {
    	return (
    		<div>
                <Switch>
                    <Route path = { PizzaInfo.Route } render= { () =>
                        <OrderFrameContainer
                            Title = { PizzaInfo.Title }
                            AwsBaseUrl = { this.state.AwsBaseUrl }
                            MenuItems = { PizzaInfo.Items }
                        />
                    } />

                    <Route path = { DrinkInfo.Route } render={ () =>
                        <OrderFrameContainer
                            Title = { DrinkInfo.Title }
                            AwsBaseUrl = { this.state.AwsBaseUrl }
                            MenuItems = { DrinkInfo.Items }
                        />
                    } />

                    <Route path = { SideItemInfo.Route } render = {() =>
                        <OrderFrameContainer
                            Title = { SideItemInfo.Title }
                            AwsBaseUrl = { this.state.AwsBaseUrl }
                            MenuItems = { SideItemInfo.Items }
                        />
                    } />
                </Switch>
        	</div>
    	);
	}
}

export default MainOrderComponent;