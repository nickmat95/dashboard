import React from 'react';
import { connect } from 'react-redux';
import './Add-cart-button.css';

class AddCartButton extends React.Component {
	render() {
	    return (
	    	<div className="addCart">
	 			<button type="button">Add cart</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(AddCartButton);