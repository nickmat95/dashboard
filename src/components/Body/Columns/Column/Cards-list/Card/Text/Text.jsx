import React from 'react';
import { connect } from 'react-redux';
import './Text.css';

class Text extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	value: this.props.text,
	    };

	    this.changeText = this.changeText.bind(this);
	}

	componentWillReceiveProps() {

	}

	changeText(event) {
		let text = event.target.value;

		this.setState({
			value: text
		});

		this.props.getChangedCardText(text, this.props.columnId, this.props.cardId);
	}

	render() {
		let editButtonState = (this.props.text) ? 'edit' : 'save';

		if (this.props.columnId === this.props.editButtonState.columnId && this.props.cardId === this.props.editButtonState.cardId) {
			editButtonState = this.props.editButtonState.state;
		}

	    return (
	    	<div className="text">
	    		<input value={this.state.value} type="text" onChange={this.changeText} disabled={editButtonState === 'edit' && this.props.text} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({
		editButtonState: state.getCardEditButtonState
	}),
	dispatch => ({
		getChangedCardText: (text, columnId, cardId) => dispatch({ type: 'GET_CHANEGED_TEXT', text, columnId, cardId }),
	})
)(Text);