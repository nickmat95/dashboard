const initialState = '';

export function getColumnEditButtonState(state = initialState, action) {
  switch(action.type) {
  	case 'GET_COLUMN_EDIT_STATE':
  		return {
  			state: action.state,
  			columnId: action.columnId
  		};
  		break;
  }
  return state;
}

export function getChangedColumnTitle(state = initialState, action) {
  switch(action.type) {
  	case 'GET_CHANEGED_TITLE':
  		return {
  			title: action.title,
  			columnId: action.columnId
  		};
  		break;
  }
  return state;
}