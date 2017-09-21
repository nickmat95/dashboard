import React from 'react';
import { connect } from 'react-redux';
import './Edit-title-button.css';

class EditTitleButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.editTitle = this.editTitle.bind(this);

	    this.state = {
	    	type: 'edit',
	    };
	}

	editTitle() {

		let buttonType = (this.state.type === 'edit') ? 'save' : 'edit';

		this.setState({
			type: buttonType
		});

		this.props.getEditButtonState(buttonType);

		if (buttonType === 'edit') {
			let storageColumns = JSON.parse(localStorage.getItem('columns'));

			storageColumns.forEach((item, i, arr) => {
				if (item.id === Number(this.props.columnId)) {
					item.title = this.props.changedTitle
				}
			});

			let serialColumns = JSON.stringify(storageColumns); 
			localStorage.setItem('columns', serialColumns);
			this.props.getColumnsList(JSON.parse(localStorage.getItem('columns')));
		}
	}

	render() {
		let value;
		if (this.props.changedTitle) {
			value = (this.state.type === 'edit') ? 'edit' : 'save';
		} else {
			value = 'save';
		}
	    return (
	    	<div className="editTitle">
	    		<button type="button" disabled={!this.props.changedTitle} onClick={this.editTitle}>{value}</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		changedTitle: state.getChangedTitle
	}),
	dispatch => ({
		getColumnsList: (item) => dispatch({ type: 'GET_COLUMNS', payload: item }),
	})
)(EditTitleButton);