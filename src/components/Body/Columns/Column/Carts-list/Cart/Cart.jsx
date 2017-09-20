import React from 'react';
import { connect } from 'react-redux';
import Text from './Text/Text.jsx';
import EditTextButton from './Edit-text-button/Edit-text-button.jsx';
import DeleteCartButton from './Delete-cart-button/Delete-cart-button.jsx';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../../../../../../item-types.js';
import './Cart.css';

const cartSource = {
	beginDrag(props) {
	    return {
	    	id: props.id,
	    	originalIndex: props.findCart(props.id).index,
	    };
	},

	endDrag(props, monitor) {
	    const { id: droppedId, originalIndex } = monitor.getItem();
	    const didDrop = monitor.didDrop();

	    if (!didDrop) {
	    	props.moveCart(droppedId, originalIndex);
	    }
	},
};

const cartTarget = {
	canDrop() {
  		return false;
	},

	hover(props, monitor) {
	    const { id: draggedId } = monitor.getItem();
	    const { id: overId } = props;

	    if (draggedId !== overId) {
	    	const { index: overIndex } = props.findCart(overId);
	    	props.moveCart(draggedId, overIndex);
	    }
	},
};

const DSource = DragSource(ItemTypes.CART, cartSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}));

const DTarget = DropTarget(ItemTypes.CART, cartTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}));

class Cart extends React.Component {
	render() {
		const { isDragging, connectDragSource, connectDropTarget } = this.props;
	    return connectDragSource(connectDropTarget(
	    	<div className="cart">
	    		<Text />
	    		<EditTextButton />
	    		<DeleteCartButton />
	    	</div>
	    ));
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(DTarget(DSource(Cart)));