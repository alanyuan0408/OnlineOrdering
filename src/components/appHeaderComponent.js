import React, { Component } from 'react';
import '../css/App.css';

class AppHeader extends Component {

	// Header Component, top bar of the app
	render() {
	    return (
	        <div className="App-header">
	        	<h1 className="App-title">{this.props.headerTitle}</h1>''
		    </div>
	    );
	}
}

export default AppHeader;
