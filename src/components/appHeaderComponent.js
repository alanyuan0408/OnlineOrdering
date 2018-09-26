import React, { Component } from 'react';
import '../css/App.css';

class AppHeader extends Component {

	// Header Component, top bar of the app
	render() {
	    return (
	    	<div className="row App-header">
	    		<div className="col-2">
	    		</div>

	    		<div className="col-5 App-title">
	        		<h1>{this.props.headerTitle}</h1>
	        	</div>

	    	    <div className="col-3">
	    	    	<div className="row">
	    	    		<div className="col-5">
					    	<div className="btn-group Login-Block" role="group">
					    		<button type="button" className="btn btn-light">&emsp;Login&emsp;</button>
						    	<button type="button" className="btn btn-outline-secondary">&emsp;Sign Up&emsp;</button>
					    	</div>
					    </div>

					    <div className="col-7">
							<form>
								<div class="form-group">
							    	<label for="exampleFormControlInput1">Email address</label>
							    	<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
							    	</input>
							  	</div>
							</form>
					    </div>
				    </div>
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
