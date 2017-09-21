import React from 'react';
import { connect } from 'react-redux';
import DeleteColumnButton from './Delete-column-button/Delete-column-button.jsx';
import ColumnTitle from './Column-title/Column-title.jsx';
import AddCardButton from './Add-card-button/Add-card-button.jsx';
import CardsList from './Cards-list/Cards-list.jsx';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../../../../item-types.js';
import './Column.css';

const columnSource = {
	beginDrag(props) {
	    return {
	    	id: props.id,
	    	originalIndex: props.findColumn(props.id).index,
	    };
	},

	endDrag(props, monitor) {
	    const { id: droppedId, originalIndex } = monitor.getItem();
	    const didDrop = monitor.didDrop();

	    if (!didDrop) {
	    	props.moveColumn(droppedId, originalIndex);
	    }
	},
};

const columnTarget = {
	canDrop() {
  		return false;
	},

	hover(props, monitor) {
	    const { id: draggedId } = monitor.getItem();
	    const { id: overId } = props;

	    if (draggedId !== overId) {
	    	const { index: overIndex } = props.findColumn(overId);
	    	props.moveColumn(draggedId, overIndex);
	    }
	},
};

const DSource = DragSource(ItemTypes.COLUMN, columnSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}));

const DTarget = DropTarget(ItemTypes.COLUMN, columnTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}));

class Column extends React.Component {
	render() {
		const { isDragging, connectDragSource, connectDropTarget } = this.props;
	    return connectDragSource(connectDropTarget(
	    	<div className="column">
	    		<DeleteColumnButton columnId={this.props.id} />
	    		<ColumnTitle
	    			title={this.props.title} 
	    			columnId={this.props.id}
	    		/>
	    		<CardsList
	    			columnId={this.props.id}
	    			cardsList={this.props.cardsList}
	    		/>
	    		<AddCardButton
	    			columnId={this.props.id}
	    			cardsList={this.props.cardsList}
	    		/>
	    	</div>
	    ));
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(DTarget(DSource(Column)));