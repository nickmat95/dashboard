import React from 'react';
import { connect } from 'react-redux';
import Column from './Column/Column.jsx';
import AddColumnButton from './Add-column-button/Add-column-button.jsx';
import update from 'react/lib/update';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from '../../../item-types.js';
import './Columns.css';

const columnTarget = {
	drop() {
	},
};

const DTarget = DropTarget(ItemTypes.COLUMN, columnTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}));

const DDropContext = DragDropContext(HTML5Backend);

class Columns extends React.Component {

	constructor(props) {
	    super(props);

	    this.moveColumn = this.moveColumn.bind(this);
	    this.findColumn = this.findColumn.bind(this);

	    this.state = {
	      columns: [{
	        id: 1,
	      }, {
	        id: 2,
	      }, {
	        id: 3,
	      }, {
	        id: 4,
	      }, {
	        id: 5,
	      }],
	    };
	}


	moveColumn(id, atIndex) {
		const { column, index } = this.findColumn(id);
	    this.setState(update(this.state, {
	    	columns: {
		        $splice: [
		        	[index, 1],
		        	[atIndex, 0, column],
		        ],
	    	},
		}));
	}

	findColumn(id) {
	    const { columns } = this.state;
	    const column = columns.filter(c => c.id === id)[0];

	    return {
	    	column,
	    	index: columns.indexOf(column),
	    };
	}

	render() {
		const { connectDropTarget } = this.props;
    	const { columns } = this.state;

	    return connectDropTarget(
	    	<div className="columns">
	    	{columns.map(column => (
	    		<Column
	    			key={column.id}
		            id={column.id}
		            moveColumn={this.moveColumn}
		            findColumn={this.findColumn}
	    		/>
	    	))}
	    		<AddColumnButton />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(DDropContext(DTarget(Columns)));