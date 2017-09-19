import React from 'react';
import { connect } from 'react-redux';
import './Body.css';

class Body extends React.Component {
	render() {
	    return (
	    	<div className="container">
	    		<h1>HelloWorld</h1>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Body);