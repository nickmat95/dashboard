import { combineReducers } from 'redux';

import getColumnsList from './get-columns-list.js';
import { getColumnEditButtonState, getChangedColumnTitle } from './column-actions.js';
import { getCardEditButtonState, getChangedCardText } from './card-actions.js';

export default combineReducers({
	getColumnsList,
	getColumnEditButtonState,
	getChangedColumnTitle,
	getCardEditButtonState,
	getChangedCardText,
});