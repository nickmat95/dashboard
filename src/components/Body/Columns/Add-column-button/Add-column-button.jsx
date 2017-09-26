import React from 'react';
import { connect } from 'react-redux';
import './Add-column-button.css';

class Columns extends React.Component {

	constructor(props) {
	    super(props);

	    this.addColumn = this.addColumn.bind(this);
	}

	addColumn() {

		const storageColumns = JSON.parse(localStorage.getItem('columns'));

		let columnsList = [];

		let column = {
			id: '',
			title: '',
			cards: []
		};

		if (storageColumns === null || !storageColumns[0]) {
			column.id = 0;
			columnsList = [column];
		} else {

			let sortStorageColumns = Object.assign([], storageColumns);

			let sortColumns = (a, b) => a.id - b.id;

			sortStorageColumns.sort(sortColumns);

			let lastElement = sortStorageColumns.length - 1;
			let lastId = sortStorageColumns[lastElement].id;
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