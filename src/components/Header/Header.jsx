import React from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component {
	render() {
	    return (
	    	<div className="header">
		    	<div className="container">
		        	<p className="title">Dashboard</p>
		    	</div>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Header);