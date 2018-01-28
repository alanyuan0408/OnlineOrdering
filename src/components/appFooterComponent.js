import React, { Component } from 'react';
import '../css/App.css';

class AppFooter extends Component {

  render() {
    return (
		<footer className="App-footer">
	    	<p>{this.props.footerTexts}</p>
	   	</footer>
    );
  }

}

export default AppFooter;
