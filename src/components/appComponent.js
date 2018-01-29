import React, { Component } from 'react';
import '../css/App.css';
import OrderFrame from './orderFrameComponent'
import AppFooter from './appFooterComponent'
import AppHeader from './appHeaderComponent'

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

        <OrderFrame/>

        <AppFooter footerTexts ="All Rights Reserved"/>
      </div>
    );
  }
}

export default App;
