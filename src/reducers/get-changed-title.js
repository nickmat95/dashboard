const initialState = '';

export default function getChangedTitle(state = initialState, action) {
  switch(action.type) {
  	case 'GET_CHANGED_TITLE':
  		return action.payload;
  		break;
  }
  return state;
}