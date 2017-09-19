import React from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Body from './Body/Body.jsx';

class App extends React.Component {
	render() {
	    return (
	    	<div>
	    		<Header />
	        	<Body />
	        	<Footer />
	    	</div>
	    );
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({

	})
)(App);