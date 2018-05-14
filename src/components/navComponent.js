import React, { Component } from 'react';
import '../css/App.css';

import { Switch, Router, Route, Link } from "react-router-dom";

class NavComponent extends Component {

  // Header Component, top bar of the app
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/pizzas'>Pizza Menu</Link></li>
          <li><Link to='/drinks'>Drinks Menu</Link></li>
          <li><Link to='/sides'>Sides Menu</Link></li>
        </ul>
      </nav>
    );
  }

}

export default NavComponent;
