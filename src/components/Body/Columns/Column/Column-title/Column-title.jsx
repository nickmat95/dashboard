import React from 'react';
import { connect } from 'react-redux';
import Title from './Title/Title.jsx';
import EditTitleButton from './Edit-title-button/Edit-title-button.jsx';
import './Column-title.css';

class ColumnTitle extends React.Component {
	render() {
	    return (
	    	<div className="columnTitle">
	    		<Title />
	    		<EditTitleButton />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(ColumnTitle);