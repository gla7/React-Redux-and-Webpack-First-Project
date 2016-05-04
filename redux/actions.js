let actions = {

	setStatus: function(status) {
		return {
			type: 'SET_STATUS',
			status: status
		}
	},

	accepted: function(accepted) {
		return {
			type: 'ACCEPTED',
			accepted: accepted
		}
	},

	rejected: function(rejected) {
		return {
			type: 'REJECTED',
			rejected: rejected
		}
	}

}

export default actions