const initialState = [];

export default function getColumnsList(state = initialState, action) {
  switch(action.type) {
  	case 'GET_COLUMNS':
  		return action.payload;
  		break;
  }
  return state;
}