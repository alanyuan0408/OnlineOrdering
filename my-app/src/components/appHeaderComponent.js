import React, { Component } from 'react';
import '../css/App.css';

class AppHeader extends Component {

  render() {
    return (
        <header className="App-header">
          <h1 className="App-title">{this.props.headerTitle}</h1>
        </header>
    );
  }

}

export default AppHeader;
