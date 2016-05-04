import React, { Component } from 'react'
import classNames from 'classnames'



class Buttons extends Component {

	handleYes() {
		this.props.allActions.isAnswered(true)
	}

	handleNo() {
		this.props.allActions.isAnswered(false)
	}

	render() {
		// console.log(this.props.allActions)
		// console.log(this.wholeState)
		// console.log(this.props.wholeState)
		// console.log(this.props.wholeState.rejected)
		// className={(this.state.accepted, 'hide')
		if (!this.props.wholeState.answer.isAnswered) {
			return  <div>
						<button onClick={this.handleYes.bind(this)}>Yes</button>
						<button onClick={this.handleNo.bind(this)}>No</button>
					</div>
		} else {
			if(!this.props.wholeState.answer.isAccepted) {
				return  <div>
							<div>
								<div>Please give us some feedback:</div>
								<textarea rows="4" cols="50"></textarea> 
								<button>Send</button>
							</div> 
						</div>
			} else {
			return  <div>
						<div>
							<div>Why are you a good candidate for the job?</div>
							<textarea rows="4" cols="50"></textarea> 
							<button>Send</button>
						</div>
					</div>
				}
		}
	}
}

export default Buttons