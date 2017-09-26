import React from 'react';
import { connect } from 'react-redux';
import './Title.css';

class Title extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	value: this.props.title,
	    };

	    this.changeTitle = this.changeTitle.bind(this);
	}

	changeTitle(event) {
		let title = event.target.value;

		this.setState({
			value: title
		});

		this.props.getChangedColumnTitle(title, this.props.columnId);
	}

	render() {
		let editButtonState = (this.props.title) ? 'edit' : 'save';

		if (this.props.columnId === this.props.editButtonState.columnId && this.props.editButtonState.state) {
			editButtonState = this.props.editButtonState.state;
		}

	    return (
	    	<div className="columnTitleText">
	    		<input type="text" value={this.state.value} onChange={this.changeTitle} disabled={editButtonState === 'edit' && this.props.title} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		editButtonState: state.getColumnEditButtonState
	}),
	dispatch => ({
		getChangedColumnTitle: (title, columnId) => dispatch({ type: 'GET_CHANEGED_TITLE', title, columnId }),
	})
)(Title);