import React, { Component } from 'react';
import '../css/App.css';
import OrderFrame from './orderFrameComponent'
import AppFooter from './appFooterComponent'
import AppHeader from './appHeaderComponent'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Online Ordering App"
    }

  };

  render() {
    return (
      <div className="App">
        <AppHeader headerTitle ="Online Ordering"/>

        <OrderFrame/>

        <AppFooter footerTexts ="All Rights Reserved"/>
      </div>
    );
  }
}

export default App;
