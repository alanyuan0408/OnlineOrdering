import React, { Component } from 'react';
import '../css/App.css';
import OrderFrameContainer from './OrderFrameComponent/orderFrameContainer'
import AppFooter from './appFooterComponent'
import AppHeader from './appHeaderComponent'
import NavComponent from './navComponent'
import SelectOrderFrameContainer from './SelectedOrderFrameComponent/selectorderframecontainer'

import { Switch, Route } from "react-router-dom";
import { Grid } from 'react-bootstrap';
// Initialization Values
import { PizzaInfo, DrinkInfo, SideItemInfo } from '../assets/MenuItems';
import { Button } from 'reactstrap';

class App extends Component {
  // Base App Component that contains the Order Frame,
  // Header and Footer Components
  constructor(props) {
    super(props);

    this.state = {
        title: "Online Ordering App",
        AwsBaseUrl: process.env.REACT_APP_AWS_BASE_URL
    }

  };

  render() {
    return (

        <div>
            <AppHeader headerTitle = { this.state.title } />

            <div className="OrderFrame">

                <div className="container-large">

                    <div className="row">
                        <div className="col-9">
                            <div className="container-large">
                                <NavComponent />

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
                        </div>

                        <div className="col-3">
                            <SelectOrderFrameContainer />
                        </div>
                    </div>
                </div>
            </div>

            <AppFooter footerTexts ="All Rights Reserved"/>
        </div>
    );
  }
}

export default App;
