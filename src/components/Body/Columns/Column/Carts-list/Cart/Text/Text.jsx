import React from 'react';
import { connect } from 'react-redux';
import './Text.css';

class Text extends React.Component {
	render() {
	    return (
	    	<div className="text">
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
)(Text);