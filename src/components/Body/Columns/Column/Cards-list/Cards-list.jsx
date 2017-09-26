import React from 'react';
import { connect } from 'react-redux';
import Card from './Card/Card.jsx';
import update from 'react/lib/update';
import { DropTarget, DragDropContext } from 'react-dnd';
import ItemTypes from '../../../../../item-types.js';
import './Cards-list.css';

const cardTarget = {
	drop() {
	},
};

const DTarget = DropTarget(ItemTypes.CARD, cardTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}));

class CardsList extends React.Component {

	constructor(props) {
	    super(props);

	    this.moveCard = this.moveCard.bind(this);
	    this.findCard = this.findCard.bind(this);

	    this.state = {
	      cards: (this.props.cardsList) ? this.props.cardsList : [],
	    };
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			cards: (nextProps.cardsList !== this.props.cardsList) ? nextProps.cardsList : this.state.cards,
		});
	}

	moveCard(id, atIndex) {
		const { card, index } = this.findCard(id);
	    this.setState(update(this.state, {
	    	cards: {
		        $splice: [
		        	[index, 1],
		        	[atIndex, 0, card],
		        ],
	    	},
		}));

		let storageColumns = JSON.parse(localStorage.getItem('columns'));

		let storageCards = this.state.cards;

		storageColumns.forEach((item, i, arr) => {
			if (item.id === Number(this.props.columnId)) {
				item.cards = storageCards;
			}
		});

		let serialColumns = JSON.stringify(storageColumns); 
		localStorage.setItem('columns', serialColumns);
		this.props.getColumnsList(JSON.parse(localStorage.getItem('columns')));
	}

	findCard(id) {
	    const { cards } = this.state;
	    const card = cards.filter(c => c.id === id)[0];

	    return {
	    	card,
	    	index: cards.indexOf(card),
	    };
	}

	render() {
	    const { connectDropTarget } = this.props;
    	const { cards } = this.state;

	    return connectDropTarget(
	    	<div className="cardsList">
	    		{cards.map(card => (
	    			<Card
		    			key={card.id}
			            id={card.id}
			            columnId={this.props.columnId}
			            text={(card.text) ? card.text : ''}
			            moveCard={this.moveCard}
			            findCard={this.findCard}
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
		getColumnsList: (item) => dispatch({ type: 'GET_COLUMNS', payload: item }),
	})
)(DTarget(CardsList));