import React from 'react';
import { connect } from 'react-redux';
import './Add-column-button.css';

class Columns extends React.Component {

	constructor(props) {
	    super(props);

	    this.addColumn = this.addColumn.bind(this);
	}

	addColumn() {

		let storageColumns = JSON.parse(localStorage.getItem('columns'));

		let columnsList = [];

		let column = {
			id: '',
			title: '',
		};

		if (storageColumns === null || !storageColumns[0]) {
			column.id = 0;
			columnsList = [column];
		} else {
			let lastElement = storageColumns.length - 1;
			let lastId = storageColumns[lastElement].id;
			let newId = Number(lastId) + 1;

			column.id = newId;
			storageColumns.push(column);
			columnsList = storageColumns;
		}

		let serialColumns = JSON.stringify(columnsList); 

		localStorage.setItem('columns', serialColumns);

		this.props.getColumnsList(JSON.parse(localStorage.getItem('columns')));
		
	}

	render() {
	    return (
	    	<div className="buttonColumn">
	    		<button type="button" onClick={this.addColumn}>Add column</button>
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
)(Columns);