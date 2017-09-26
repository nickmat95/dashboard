const initialState = '';

export function getCardEditButtonState(state = initialState, action) {
	switch(action.type) {
	  	case 'GET_CARD_EDIT_STATE':
	  		return {
	  			state: action.state,
	  			columnId: action.columnId,
	  			cardId: action.cardId
	  		};
	  		break;
	}
	return state;
}

export function getChangedCardText(state = initialState, action) {
	switch(action.type) {
	    case 'GET_CHANEGED_TEXT':
	     	return {
	     		text: action.text,
	        	columnId: action.columnId,
	        	cardId: action.cardId
	    	};
	    	break;
	}
	return state;
}