import React, { Component } from 'react';
import '../css/App.css';

import { Link } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap';

import { PizzaInfo, DrinkInfo, SideItemInfo } from '../assets/MenuItems';

class NavComponent extends Component {

    // Header Component, top bar of the app
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item active><Link to={ PizzaInfo.Route } >Pizza Menu </Link></Breadcrumb.Item>
                <Breadcrumb.Item ><Link to={ DrinkInfo.Route }>Drinks Menu </Link></Breadcrumb.Item>
                <Breadcrumb.Item ><Link to={ SideItemInfo.Route }>Sides Menu </Link></Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default NavComponent;
