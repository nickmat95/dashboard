import React from 'react';
import { connect } from 'react-redux';
import './Delete-card-button.css';

class DeleteCardButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.deleteCard = this.deleteCard.bind(this);
	}

	deleteCard() {
		let storageColumns = JSON.parse(localStorage.getItem('columns'));

		let storageCards = storageColumns[this.props.columnId].cards;

		let newCardsList = storageCards.filter((card) => card.id !== Number(this.props.cardId));

		storageColumns.forEach((item, i, arr) => {
			if (item.id === Number(this.props.columnId)) {
				item.cards = newCardsList;
			}
		});

		let serialColumns = JSON.stringify(storageColumns); 

		localStorage.setItem('columns', serialColumns);

		this.props.getColumnsList(JSON.parse(localStorage.getItem('columns')));
	}

	render() {
	    return (
	    	<div className="deleteCard">
	    		<button type="button" onClick={this.deleteCard}>X</button>
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
)(DeleteCardButton);