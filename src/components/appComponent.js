import React, { Component } from 'react';
import '../css/App.css';
import OrderFrameContainer from './OrderFrameComponent/orderFrameContainer'
import AppFooter from './appFooterComponent'
import AppHeader from './appHeaderComponent'
import SelectOrderFrameContainer from './SelectedOrderFrameComponent/selectorderframecontainer'

import { Switch, Router, Route, Link } from "react-router-dom";

// Initialization Values
import { PizzaItems, DrinkItems, SideItems } from '../assets/MenuItems';

class App extends Component {
  // Base App Component that contains the Order Frame,
  // Header and Footer Components
  constructor(props) {
    super(props);

    this.state = {
      title: "Online Ordering App",
      AwsBaseUrl: "https://0z45mil1tb.execute-api.us-east-2.amazonaws.com/prod/"
    }

  };

  render() {

    return (
      <div className="App">
        <AppHeader headerTitle ="Online Ordering App"/>

        <div className="OrderFrame">

          <SelectOrderFrameContainer />

          <Switch>
            <Route exact path="/" render={ () =>
                <OrderFrameContainer
                   AwsBaseUrl = { this.state.AwsBaseUrl }
                   MenuItems = { PizzaItems }
                />
              }
            />

            <Route path="/roster" render={ () =>
                <OrderFrameContainer
                  AwsBaseUrl = { this.state.AwsBaseUrl }
                  MenuItems = { DrinkItems }
                />
              }
            />

            <Route path="/schedule" render={ () =>
                <OrderFrameContainer
                  AwsBaseUrl = { this.state.AwsBaseUrl }
                  MenuItems = { SideItems }
                />
              }
            />
          </Switch>



        </div>

        <AppFooter footerTexts ="All Rights Reserved"/>
      </div>
    );

  }
}

export default App;
