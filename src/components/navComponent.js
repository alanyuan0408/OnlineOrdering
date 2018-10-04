import React, { Component } from 'react';
import '../css/App.css';

import { Link } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap';

import { PizzaInfo, DrinkInfo, SideItemInfo } from '../assets/MenuItems';

class NavComponent extends Component {

    // Header Component, top bar of the app
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Menu Navigation Bar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                        </li>
                        <li class="nav-item">
                        </li>
                        <li class="nav-item">
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavComponent;

