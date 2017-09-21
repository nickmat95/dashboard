import React from 'react';
import { connect } from 'react-redux';
import Title from './Title/Title.jsx';
import EditTitleButton from './Edit-title-button/Edit-title-button.jsx';
import './Column-title.css';

class ColumnTitle extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	editButtonState: (this.props.title) ? 'edit' : 'save',
	    	changedTitle: this.props.title
	    };

	    this.getEditButtonState = this.getEditButtonState.bind(this);
	    this.getChangedTitle = this.getChangedTitle.bind(this);
	}


	getChangedTitle(state) {
		this.setState({
			changedTitle: state
		});
	}

	getEditButtonState(state) {
		this.setState({
			editButtonState: state
		});
	}

	render() {
	    return (
	    	<div className="columnTitle">
	    		<Title
	    			columnId={this.props.columnId}
	    			editButtonState={this.state.editButtonState}
	    			title={this.props.title} 
	    			getChangedTitle={this.getChangedTitle}
	    		/>
	    		<EditTitleButton
	    			getEditButtonState={this.getEditButtonState}
	    			title={this.state.changedTitle}
	    			defaultTitle={this.props.title}
	    			columnId={this.props.columnId}
	    		/>
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