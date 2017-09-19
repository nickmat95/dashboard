import React from 'react';
import { connect } from 'react-redux';
import './Add-column-button.css';

class Columns extends React.Component {
	render() {
	    return (
	    	<div className="buttonColumn">
	    		<button type="button">Add column</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Columns);