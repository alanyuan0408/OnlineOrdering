import React, { Component } from 'react';
import '../css/App.css';
import OrderFrameContainer from './OrderFrameComponent/orderFrameContainer'
import AppFooter from './appFooterComponent'
import AppHeader from './appHeaderComponent'
import SelectOrderFrameContainer from './SelectedOrderFrameComponent/selectorderframecontainer'

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

          <OrderFrameContainer
             AwsBaseUrl = { this.state.AwsBaseUrl }
             MenuItems = { PizzaItems }
          />

        </div>

        <AppFooter footerTexts ="All Rights Reserved"/>
      </div>
    );
    
  }
}

export default App;
