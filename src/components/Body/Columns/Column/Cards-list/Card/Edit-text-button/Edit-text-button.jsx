import React from 'react';
import { connect } from 'react-redux';
import './Edit-text-button.css';

class EditTextButton extends React.Component {
	constructor(props) {
	    super(props);

	    this.editText = this.editText.bind(this);

	    this.state = {
	    	type: (this.props.defaultText) ? 'edit' : 'save',
	    	text: this.props.defaultText,
	    };
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.columnId === this.props.changedText.columnId && this.props.cardId === this.props.changedText.cardId && this.props !== nextProps) {
			this.setState({
				text: this.props.changedText.text,
			});
		}
	}

	editText() {

		let buttonType = (this.state.type === 'edit') ? 'save' : 'edit';

		this.setState({
			type: buttonType
		});

		this.props.getCardEditButtonState(buttonType, this.props.columnId, this.props.cardId);

		if (buttonType === 'edit' && this.props.columnId === this.props.changedText.columnId && this.props.cardId === this.props.changedText.cardId) {
			let storageColumns = JSON.parse(localStorage.getItem('columns'));

			let storageCards = storageColumns[this.props.columnId].cards;

			storageCards.forEach((item, i, arr) => {
				if (item.id === Number(this.props.cardId)) {
					item.text = this.props.changedText.text;
				}
			});

			storageColumns.forEach((item, i, arr) => {
				if (item.id === Number(this.props.columnId)) {
					item.cards = storageCards;
				}
			});

			let serialColumns = JSON.stringify(storageColumns); 
			localStorage.setItem('columns', serialColumns);
			this.props.getColumnsList(JSON.parse(localStorage.getItem('columns')));
		}
	}

	render() {
	    return (
	    	<div className="editText">
	    		<button type="button" disabled={!this.state.text} onClick={this.editText}>{this.state.type}</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		changedText: state.getChangedCardText
	}),
	dispatch => ({
		getColumnsList: (item) => dispatch({ type: 'GET_COLUMNS', payload: item }),
		getCardEditButtonState: (state, columnId, cardId) => dispatch({ type: 'GET_CARD_EDIT_STATE', state, columnId, cardId }),
	})
)(EditTextButton);