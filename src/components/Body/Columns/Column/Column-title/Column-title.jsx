import React from 'react';
import { connect } from 'react-redux';
import Title from './Title/Title.jsx';
import EditTitleButton from './Edit-title-button/Edit-title-button.jsx';
import './Column-title.css';

class ColumnTitle extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	editButtonState: ''
	    };

	    this.getEditButtonState = this.getEditButtonState.bind(this);
	}

	componentDidMount() {
		this.setState({
			editButtonState: (this.props.title) ? 'edit' : 'save'
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
	    			editButtonState={this.state.editButtonState}
	    			title={this.props.title} 
	    		/>
	    		<EditTitleButton
	    			getEditButtonState={this.getEditButtonState}
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