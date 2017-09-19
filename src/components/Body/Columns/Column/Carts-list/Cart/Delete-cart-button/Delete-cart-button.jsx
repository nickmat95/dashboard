import React from 'react';
import { connect } from 'react-redux';
import './Delete-cart-button.css';

class DeleteCartButton extends React.Component {
	render() {
	    return (
	    	<div className="deleteCart">
	    		<button type="button">X</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(DeleteCartButton);