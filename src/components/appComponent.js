import React, { Component } from 'react';
import '../css/App.css';
import OrderFrameContainer from './OrderFrameComponent/orderFrameContainer'
import AppFooter from './appFooterComponent'
import AppHeader from './appHeaderComponent'
import SelectOrderFrameContainer from './SelectedOrderFrameComponent/selectedorderframecomponent'

// Initialization Values
import { PizzaItems, DrinkItems, SideItems } from '../assets/MenuItems';
var AwsBaseUrl = "https://0z45mil1tb.execute-api.us-east-2.amazonaws.com/prod/"

class App extends Component {
  // Base App Component that contains the Order Frame,
  // Header and Footer Components
  constructor(props) {
    super(props);

    this.state = {
      title: "Online Ordering App"
    }

  };

  render() {

    return (
      <div className="App">
        <AppHeader headerTitle ="Online Ordering App"/>

        <div className="OrderFrame">

          <SelectOrderFrameContainer />

          <OrderFrameContainer
             AwsBaseUrl = { AwsBaseUrl }
             MenuItems = { PizzaItems }
          />

        </div>

        <AppFooter footerTexts ="All Rights Reserved"/>
      </div>
    );
  }
}

export default App;
