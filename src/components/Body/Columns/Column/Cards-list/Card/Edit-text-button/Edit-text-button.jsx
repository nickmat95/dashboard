import React from 'react';
import { connect } from 'react-redux';
import './Edit-text-button.css';

class EditTextButton extends React.Component {


	constructor(props) {
	    super(props);

	    this.editText = this.editText.bind(this);

	    this.state = {
	    	type: (this.props.defaultText) ? 'edit' : 'save',
	    };
	}

	editText() {

		let buttonType = (this.state.type === 'edit') ? 'save' : 'edit';

		this.setState({
			type: buttonType
		});

		this.props.getEditButtonState(buttonType);

		if (buttonType === 'edit') {
			let storageColumns = JSON.parse(localStorage.getItem('columns'));

			let storageCards = storageColumns[this.props.columnId].cards;

			storageCards.forEach((item, i, arr) => {
				if (item.id === Number(this.props.cardId)) {
					item.text = this.props.text;
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
		let value = (!this.props.defaultText) ? 'save' : ((this.props.text) ? ((this.state.type === 'edit') ? 'edit' : 'save') : 'save');
	    return (
	    	<div className="editText">
	    		<button type="button" disabled={!this.props.text} onClick={this.editText}>{value}</button>
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
)(EditTextButton);