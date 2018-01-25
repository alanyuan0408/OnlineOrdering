import React, { Component } from 'react';
import '../css/App.css';
import OrderFrame from './orderFrameComponent'

class header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Online Ordering App"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
        </header>

        <OrderFrame/>
      </div>
    );
  }
}

export default header;
