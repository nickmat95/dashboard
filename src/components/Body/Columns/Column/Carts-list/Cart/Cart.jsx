import React from 'react';
import { connect } from 'react-redux';
import Text from './Text/Text.jsx';
import EditTextButton from './Edit-text-button/Edit-text-button.jsx';
import DeleteCartButton from './Delete-cart-button/Delete-cart-button.jsx';
import './Cart.css';

class Cart extends React.Component {
	render() {
	    return (
	    	<div className="cart">
	    		<Text />
	    		<EditTextButton />
	    		<DeleteCartButton />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Cart);