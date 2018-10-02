import React, { Component } from 'react';
import '../css/App.css';

import AppFooter from './appFooterComponent'
import AppHeader from './appHeaderComponent'
import NavComponent from './navComponent'
import SelectOrderFrameContainer from './SelectedOrderFrameComponent/selectorderframecontainer'
import MainOrderComponent from './mainOrderComponent'

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

            <div className="mainFrame">

                <div className="OrderFrame">

                    <div className="container-large">

                        <div className="row">
                            <div className="col-9">
                                <div className="container-large">
                                    <NavComponent />

                                    <MainOrderComponent />
                                </div>
                            </div>

                            <div className="col-3">
                                <SelectOrderFrameContainer />
                            </div>
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
