import { combineReducers } from 'redux';

import getColumnsList from './get-columns-list.js';
import getChangedTitle from './get-changed-title.js';

export default combineReducers({
	getColumnsList,
	getChangedTitle
});