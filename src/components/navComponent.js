import React, { Component } from 'react';
import '../css/App.css';

import { Switch, Router, Route, Link } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap';

class NavComponent extends Component {

  // Header Component, top bar of the app
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item active><Link to='/'>Pizza Menu </Link></Breadcrumb.Item>
        <Breadcrumb.Item ><Link to='/drinks'>Drinks Menu </Link></Breadcrumb.Item>
        <Breadcrumb.Item ><Link to='/sides'>Sides Menu </Link></Breadcrumb.Item>
    </Breadcrumb>
    );
  }

}

export default NavComponent;
