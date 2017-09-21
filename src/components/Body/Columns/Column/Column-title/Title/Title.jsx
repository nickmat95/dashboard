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

		this.props.getChangedTitle(title);
	}

	render() {
	    return (
	    	<div className="columnTitleText">
	    		<input type="text" value={this.state.value} onChange={this.changeTitle} disabled={this.props.editButtonState === 'edit' && this.props.title} />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(Title);