import React, { Component } from 'react'
import ClickedYes from './ClickedYes'



class Buttons extends Component {

	handleYes() {
		this.props.allActions.accepted(true)
		this.props.allActions.rejected(false)
	}

	handleNo() {
		this.props.allActions.accepted(false)
		this.props.allActions.rejected(true)
	}

	render() {
		// console.log(this.props.allActions)
		// console.log(this.wholeState)
		// console.log(this.props.wholeState)
		// console.log(this.props.wholeState.rejected)
		if (this.props.wholeState.accepted === false && this.props.wholeState.rejected === false) {
			return  <div>
						<button onClick={this.handleYes.bind(this)}>Yes</button>
						<button onClick={this.handleNo.bind(this)}>No</button>
					</div>
		} else if ( this.props.wholeState.accepted === false && this.props.wholeState.rejected === true ) {
			return  <div>
						<button onClick={this.handleYes.bind(this)}>Yes</button>
						<button onClick={this.handleNo.bind(this)}>No</button>
						<div>
							<div>Please give us some feedback:</div>
							<textarea rows="4" cols="50"></textarea> 
							<button>Send</button>
						</div> 
					</div>
		} else {
			return  <div>
						<button onClick={this.handleYes.bind(this)}>Yes</button>
						<button onClick={this.handleNo.bind(this)}>No</button>
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