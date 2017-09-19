import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
				<App />
			</Provider>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));