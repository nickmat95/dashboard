import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart/Cart.jsx';
import update from 'react/lib/update';
import { DropTarget, DragDropContext } from 'react-dnd';
import ItemTypes from '../../../../../item-types.js';
import './Carts-list.css';

const cartTarget = {
	drop() {
	},
};

const DTarget = DropTarget(ItemTypes.CART, cartTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}));

class CartsList extends React.Component {

	constructor(props) {
	    super(props);

	    this.moveCart = this.moveCart.bind(this);
	    this.findCart = this.findCart.bind(this);

	    this.state = {
	      carts: [{
	        id: 1,
	      }, {
	        id: 2,
	      }, {
	        id: 3,
	      }, {
	        id: 4,
	      }, {
	        id: 5,
	      }],
	    };
	}


	moveCart(id, atIndex) {
		const { cart, index } = this.findCart(id);
	    this.setState(update(this.state, {
	    	carts: {
		        $splice: [
		        	[index, 1],
		        	[atIndex, 0, cart],
		        ],
	    	},
		}));
	}

	findCart(id) {
	    const { carts } = this.state;
	    const cart = carts.filter(c => c.id === id)[0];

	    return {
	    	cart,
	    	index: carts.indexOf(cart),
	    };
	}

	render() {
	    const { connectDropTarget } = this.props;
    	const { carts } = this.state;

	    return connectDropTarget(
	    	<div className="cartsList">
	    		{carts.map(cart => (
	    			<Cart
		    			key={cart.id}
			            id={cart.id}
			            moveCart={this.moveCart}
			            findCart={this.findCart}
	    			/>
	    		))}
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(DTarget(CartsList));