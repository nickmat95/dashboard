import React from 'react';
import { connect } from 'react-redux';
import './Edit-text-button.css';

class EditTextButton extends React.Component {
	render() {
	    return (
	    	<div className="editText">
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
)(EditTextButton);