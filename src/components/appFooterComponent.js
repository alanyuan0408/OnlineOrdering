import React, { Component } from 'react';
import '../css/App.css';

class AppFooter extends Component {

	// Footer Component, base bar of the app
	render() {
	    return (
			<div className="App-footer">
		    	<p>{this.props.footerTexts}</p>
		   	</div>
	    );
	}
}

export default AppFooter;
