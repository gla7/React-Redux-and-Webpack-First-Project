let actions = {

	isAvailable: function(available) {
		return {
			type: 'IS_AVAILABLE',
			available: available
		}
	},

	isAnswered: function(response) {
		return {
			type: 'IS_ANSWERED',
			response: response
		}
	},

	isSubmitted: function(response) {
		return {
			type: 'IS_SUBMITTED',
			response: response
		}
	},

}

export default actions