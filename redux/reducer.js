let reducer = function(state, action) {

	switch (action.type) {
		case 'SET_STATUS':
			return Object.assign({}, state, {
				status: action.status
			})
	
		case 'ACCEPTED':
			return Object.assign({}, state, {
				accepted: action.accepted
			})

		case 'REJECTED':
			return Object.assign({}, state, {
				rejected: action.rejected
			})

		default: return state;
	}
}

export default reducer