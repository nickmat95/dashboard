import React from 'react';
import { connect } from 'react-redux';
import Text from './Text/Text.jsx';
import EditTextButton from './Edit-text-button/Edit-text-button.jsx';
import DeleteCardButton from './Delete-card-button/Delete-card-button.jsx';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../../../../../../item-types.js';
import './Card.css';

const cardSource = {
	beginDrag(props) {
	    return {
	    	id: props.id,
	    	originalIndex: props.findCard(props.id).index,
	    };
	},

	endDrag(props, monitor) {
	    const { id: droppedId, originalIndex } = monitor.getItem();
	    const didDrop = monitor.didDrop();

	    if (!didDrop) {
	    	props.moveCard(droppedId, originalIndex);
	    }
	},
};

const cardTarget = {
	canDrop() {
  		return false;
	},

	hover(props, monitor) {
	    const { id: draggedId } = monitor.getItem();
	    const { id: overId } = props;

	    if (draggedId !== overId) {
	    	const { index: overIndex } = props.findCard(overId);
	    	props.moveCard(draggedId, overIndex);
	    }
	},
};

const DSource = DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}));

const DTarget = DropTarget(ItemTypes.CARD, cardTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}));

class Card extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	editButtonState: (this.props.text) ? 'edit' : 'save',
	    	changedText: this.props.text
	    };

	    this.getEditButtonState = this.getEditButtonState.bind(this);
	    this.getChangedText = this.getChangedText.bind(this);
	}

	getChangedText(state) {
		this.setState({
			changedText: state
		});
	}

	getEditButtonState(state) {
		this.setState({
			editButtonState: state
		});
	}

	render() {
		const { isDragging, connectDragSource, connectDropTarget } = this.props;
	    return connectDragSource(connectDropTarget(
	    	<div className="card">
	    		<Text
	    			columnId={this.props.columnId}
	    			cardId={this.props.id}
	    			editButtonState={this.state.editButtonState}
	    			text={this.props.text}
	    			getChangedText={this.getChangedText}
	    		/>
	    		<EditTextButton
	    			getEditButtonState={this.getEditButtonState}
	    			text={this.state.changedText}
	    			defaultText={this.props.text}
	    			columnId={this.props.columnId}
	    			cardId={this.props.id}
	    		/>
	    		<DeleteCardButton
	    			cardId={this.props.id}
	    			columnId={this.props.columnId}
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
)(DTarget(DSource(Card)));