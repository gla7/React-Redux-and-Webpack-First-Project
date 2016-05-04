let reducer = function(state, action) {

	switch (action.type) {
		case 'IS_AVAILABLE':
			return Object.assign({}, state, {
				isAvailable: action.available
			})
	
		case 'IS_ANSWERED':
			return Object.assign({}, state, {
				answer: {
					isAnswered: true,
					isAccepted: action.response
				}
			})

		default: return state;
	}
}

export default reducer