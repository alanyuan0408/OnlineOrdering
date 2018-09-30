import React, { Component } from 'react';
import '../css/App.css';
import LoginDropDown from './widgets/loginDropDown'

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginOpen: false,
            signUpOpen: false
        }

        this.openLogin = this.openLogin.bind(this);
        this.openSignUp = this.openSignUp.bind(this);
    };

    openLogin() {
        this.state.loginOpen = true;
        this.state.signUpOpen = false;
    }

    openSignUp() {
        this.state.signUpOpen = true;
        this.state.loginOpen = false;
    }

    // Login Component at the header of the app
    render() {
        return (
            <div className="row">
                <div className="btn-group Login-Block" role="group">
                    <button type="button" onClick={this.openLogin} 
                        className="btn btn-light">&emsp;Login&emsp;</button>
                    <button type="button" onClick={this.openSignUp} 
                        className="btn btn-outline-secondary">&emsp;Sign Up&emsp;</button>
                </div>

                <LoginDropDown />
            </div>
        );
    }
}

export default LoginComponent;
