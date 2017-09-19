import React from 'react';
import { connect } from 'react-redux';
import './Delete-column-button.css';

class DeleteColumnButton extends React.Component {
	render() {
	    return (
	    	<div className="deleteColumn">
	    		<button className="deleteColumn" type="button">X</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(DeleteColumnButton);