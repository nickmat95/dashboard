import React from 'react';
import { connect } from 'react-redux';
import Column from './Column/Column.jsx';
import AddColumnButton from './Add-column-button/Add-column-button.jsx';
import './Columns.css';

class Columns extends React.Component {
	render() {
	    return (
	    	<div className="columns">
	    		<Column />
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
)(Columns);