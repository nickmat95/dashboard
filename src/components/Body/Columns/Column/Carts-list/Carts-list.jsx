import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart/Cart.jsx';
import './Carts-list.css';

class CartsList extends React.Component {
	render() {
	    return (
	    	<div className="cartsList">
	    		<Cart />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(CartsList);