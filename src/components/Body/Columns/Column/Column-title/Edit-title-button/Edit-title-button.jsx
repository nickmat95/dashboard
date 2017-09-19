import React from 'react';
import { connect } from 'react-redux';
import './Edit-title-button.css';

class EditTitleButton extends React.Component {
	render() {
	    return (
	    	<div className="editTitle">
	    		<button type="button">edit</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(EditTitleButton);