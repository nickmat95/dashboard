import React from 'react';
import { connect } from 'react-redux';
import Columns from './Columns/Columns.jsx';
import './Body.css';

class Body extends React.Component {
	render() {
	    return (
	    	<div className="container">
	    		<Columns />
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