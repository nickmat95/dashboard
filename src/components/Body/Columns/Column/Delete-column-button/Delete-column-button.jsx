import React from 'react';
import { connect } from 'react-redux';
import './Delete-column-button.css';

class DeleteColumnButton extends React.Component {

	constructor(props) {
	    super(props);

	    this.deleteColumn = this.deleteColumn.bind(this);
	}

	deleteColumn() {
		let storageColumns = JSON.parse(localStorage.getItem('columns'));
		let newColumnsList = storageColumns.filter((column) => column.id !== Number(this.props.columnId));

		let serialColumns = JSON.stringify(newColumnsList); 

		localStorage.setItem('columns', serialColumns);

		this.props.getColumnsList(JSON.parse(localStorage.getItem('columns')));
	}

	render() {
	    return (
	    	<div className="deleteColumn">
	    		<button className="deleteColumn" type="button" onClick={this.deleteColumn}>X</button>
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
)(DeleteColumnButton);