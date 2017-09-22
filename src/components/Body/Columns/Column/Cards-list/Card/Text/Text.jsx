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

	changeText(event) {
		let text = event.target.value;

		this.setState({
			value: text
		});

		this.props.getChangedText(text);
	}

	render() {
	    return (
	    	<div className="text">
	    		<input value={this.state.value} type="text" onChange={this.changeText} disabled={this.props.editButtonState === 'edit' && this.props.text} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Text);