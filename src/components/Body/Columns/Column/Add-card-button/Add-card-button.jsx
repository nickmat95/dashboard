import React from 'react';
import { connect } from 'react-redux';
import './Add-card-button.css';

class AddCardButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.addCard = this.addCard.bind(this);
	}

	addCard() {

		let card = {
			id: '',
			text: '',
		};

		if (!this.props.cardsList[0]) {
			card.id = 0;
		} else {
			let lastElement = this.props.cardsList.length - 1;
			let lastId = this.props.cardsList[lastElement].id;
			let newId = Number(lastId) + 1;

			card.id = newId;
		}

		let storageColumns = JSON.parse(localStorage.getItem('columns'));

		storageColumns.forEach((item, i, arr) => {
			if (item.id === Number(this.props.columnId)) {
				item.cards.push(card);
			} 
		});

		let serialColumns = JSON.stringify(storageColumns);

		localStorage.setItem('columns', serialColumns);

		this.props.getColumnsList(JSON.parse(localStorage.getItem('columns')));
	}

	render() {
	    return (
	    	<div className="addCard">
	 			<button type="button" onClick={this.addCard}>Add card</button>
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
)(AddCardButton);