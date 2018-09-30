import React, { Component } from 'react';
import '../css/App.css';

import LoginComponent from "./loginComponent";

class AppHeader extends Component {

	// Header Component, top bar of the app
	render() {
	    return (
	    	<div className="row App-header">
	    		<div className="col-1">
	    		</div>

	    		<div className="col-6 App-title">
	        		<h1>{this.props.headerTitle}</h1>
	        	</div>

	        	<div className="col-3">
	        		<LoginComponent />
	        	</div>

	    		<div className="col-2">
	        		<div className="Address-Block">
		        		<address>
						    <strong>Online Pizza, Inc.</strong><br/>
						    1355 Market St, Suite 900<br/>
						    Vancouver, CA 94103<br/>
						    <abbr title="Phone">P:</abbr> (123) 456-7890
						</address>
					</div>
	    		</div>
	        </div>
	    );
	}
}

export default AppHeader;
