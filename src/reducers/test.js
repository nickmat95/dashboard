const initialState = [];

export default function test(state = initialState, action) {
  switch(action.type) {
  	case 'TEST':
  		return action.payload;
  		break;
  }
  return state;
}