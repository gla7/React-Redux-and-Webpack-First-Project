import React, { Component } from 'react'
import ClickedYes from './ClickedYes'



class Buttons extends Component {

	clickYes() {
		console.log("You clicked yes")
		this.setState({
			status: 1
		})
	}

	clickNo() {
		console.log("You clicked no")
		this.setState({
			status: 2
		})
	}

	constructor(props, context) {
		super(props, context)
		this.state = {status: 0}
	}

	render() {
		console.log(this)
		console.log(Buttons)
		if (this.state.status === 0) {
			return  <div>
						<button onClick={this.clickYes.bind(this)}>Yes</button>
						<button onClick={this.clickNo.bind(this)}>No</button>
					</div>
		} else if ( this.state.status === 2 ) {
			return  <div>
						<button onClick={this.clickYes.bind(this)}>Yes</button>
						<button onClick={this.clickNo.bind(this)}>No</button>
						<div>
							<div>Please give us some feedback:</div>
							<textarea rows="4" cols="50"></textarea> 
							<button>Send</button>
						</div> 
					</div>
		} else {
			return  <div>
						<button onClick={this.clickYes.bind(this)}>Yes</button>
						<button onClick={this.clickNo.bind(this)}>No</button>
						<div>
							<div>Why are you a good candidate for the job?</div>
							<textarea rows="4" cols="50"></textarea> 
							<button>Send</button>
						</div>
					</div>
		}
	}
}

export default Buttons