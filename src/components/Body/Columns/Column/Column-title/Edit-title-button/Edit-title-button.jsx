import React from 'react';
import { connect } from 'react-redux';
import './Edit-title-button.css';

class EditTitleButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.editTitle = this.editTitle.bind(this);

	    this.state = {
	    	type: (this.props.defaultTitle) ? 'edit' : 'save',
	    	title: this.props.defaultTitle,
	    };
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.columnId === this.props.changedTitle.columnId && this.props !== nextProps) {
			this.setState({
				title: this.props.changedTitle.title,
			});
		}
	}

	editTitle() {

		let buttonType = (this.state.type === 'edit') ? 'save' : 'edit';

		this.setState({
			type: buttonType,
		});

		this.props.getColumnEditButtonState(buttonType, this.props.columnId)

		if (buttonType === 'edit' && this.props.columnId === this.props.changedTitle.columnId) {
			let storageColumns = JSON.parse(localStorage.getItem('columns'));

			storageColumns.forEach((item, i, arr) => {
				if (item.id === Number(this.props.columnId)) {
					item.title = this.props.changedTitle.title
				}
			});

			let serialColumns = JSON.stringify(storageColumns); 
			localStorage.setItem('columns', serialColumns);
			this.props.getColumnsList(JSON.parse(localStorage.getItem('columns')));
		}
	}

	render() {
	    return (
	    	<div className="editTitle">
	    		<button type="button" disabled={!this.state.title} onClick={this.editTitle}>{this.state.type}</button>
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		changedTitle: state.getChangedColumnTitle
	}),
	dispatch => ({
		getColumnsList: (item) => dispatch({ type: 'GET_COLUMNS', payload: item }),
		getColumnEditButtonState: (state, columnId) => dispatch({ type: 'GET_COLUMN_EDIT_STATE', state, columnId }),
	})
)(EditTitleButton);