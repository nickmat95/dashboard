import React from 'react';
import { connect } from 'react-redux';
import './Edit-title-button.css';

class EditTitleButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.editTitle = this.editTitle.bind(this);

	    this.state = {
	    	type: (this.props.defaultTitle) ? 'edit' : 'save',
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

			let test = storageColumns;

			let testFun = (element) => {
				if (element.id === Number(this.props.columnId)) {
					return element
				}
			}

			storageColumns.forEach((item, i, arr) => {
				if (item.id === Number(this.props.columnId)) {
					item.title = this.props.title
				}
			});

			let serialColumns = JSON.stringify(storageColumns); 
			localStorage.setItem('columns', serialColumns);
			this.props.getColumnsList(JSON.parse(localStorage.getItem('columns')));
		}
	}

	render() {

		let value = (!this.props.defaultTitle) ? 'save' : ((this.props.title) ? ((this.state.type === 'edit') ? 'edit' : 'save') : 'save');
		
	    return (
	    	<div className="editTitle">
	    		<button type="button" disabled={!this.props.title} onClick={this.editTitle}>{value}</button>
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
)(EditTitleButton);