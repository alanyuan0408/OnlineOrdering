import React, { Component } from 'react';
import '../css/App.css';
import OrderFrameContainer from './OrderFrameComponent/orderFrameContainer'
import AppFooter from './appFooterComponent'
import AppHeader from './appHeaderComponent'
import NavComponent from './navComponent'
import SelectOrderFrameContainer from './SelectedOrderFrameComponent/selectorderframecontainer'

import { Switch, Router, Route, Link } from "react-router-dom";
import { Grid } from 'react-bootstrap';
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
      <div>
        <AppHeader headerTitle ="Online Ordering App"/>

          <div class="OrderFrame">
            <Grid >

              <SelectOrderFrameContainer />

              <NavComponent />

              <Switch>
                <Route exact path="/pizzas" render={ () =>
                    <OrderFrameContainer
                        Title = "Pizza Menu"
                        AwsBaseUrl = { this.state.AwsBaseUrl }
                        MenuItems = { PizzaItems }
                    />
                  }
                />

                <Route path="/drinks" render={ () =>
                    <OrderFrameContainer
                      Title = "Drinks Menu"
                      AwsBaseUrl = { this.state.AwsBaseUrl }
                      MenuItems = { DrinkItems }
                    />
                  }
                />

                <Route path="/sides" render={ () =>
                    <OrderFrameContainer
                      Title = "Sides Menu"
                      AwsBaseUrl = { this.state.AwsBaseUrl }
                      MenuItems = { SideItems }
                    />
                  }
                />
              </Switch>

            </Grid>
          </div>

        <AppFooter footerTexts ="All Rights Reserved"/>
      </div>
    );

  }
}

export default App;
