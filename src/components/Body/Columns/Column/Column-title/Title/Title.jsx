import React from 'react';
import { connect } from 'react-redux';
import './Title.css';

class Title extends React.Component {
	render() {
	    return (
	    	<div className="columnTitleText">
	    		<input type="text" />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Title);