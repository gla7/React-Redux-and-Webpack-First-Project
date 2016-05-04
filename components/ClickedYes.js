import React, { Component } from 'react'




class ClickedYes extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {status: true}
	}

	render() {
		if ( this.state.status ) {
			console.log("Something displayed")
			return  <div>
						<div>Please give us some feedback</div>
						<input></input> 
					</div>
		} else {
			console.log("Nothing displayed")
			return  <div>
						 
					</div>
		}
	}
}

export default ClickedYes