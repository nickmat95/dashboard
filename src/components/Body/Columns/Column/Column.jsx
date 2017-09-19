import React from 'react';
import { connect } from 'react-redux';
import DeleteColumnButton from './Delete-column-button/Delete-column-button.jsx';
import ColumnTitle from './Column-title/Column-title.jsx';
import AddCartButton from './Add-cart-button/Add-cart-button.jsx';
import CartsList from './Carts-list/Carts-list.jsx';
import './Column.css';

class Columns extends React.Component {
	render() {
	    return (
	    	<div className="column">
	    		<DeleteColumnButton />
	    		<ColumnTitle />
	    		<CartsList />
	    		<AddCartButton />
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