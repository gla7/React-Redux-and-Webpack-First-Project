import React, { Component } from 'react'
import classNames from 'classnames'



class Buttons extends Component {

	constructor (props,context) {
		super (props, context) 
		this.state = {
			feedback : "",
			submitted : false,
		}
	}

	handleYes() {
		this.props.allActions.isAnswered(true)
	}

	handleNo() {
		this.props.allActions.isAnswered(false)
	}

	handleChange(event) {
		this.setState({
			feedback : event.target.value,
		})
		console.log(this.state.feedback)
	}

	handleFeedback(event) {
		event.preventDefault()
		this.props.allActions.isSubmitted(this.state.feedback)
		// $.post('/submission',this.props.wholeState).then(function (err,response) {
		// 	if (err) {
		// 		console.log("Something went wrong!")
		// 	} else {
		// 		console.log("Submission sent successfully!")
		// 	}
		// })
		console.log(this.state.feedback)
		this.setState({
			submitted : true,
		})
	}

	render() {
		if (!this.props.wholeState.answer.isAnswered) {
			return  <div>
						<button onClick={this.handleYes.bind(this)}>Yes</button>
						<button onClick={this.handleNo.bind(this)}>No</button>
					</div>
		} else {
				let title = this.props.wholeState.answer.isAccepted ? 'Why are you a good candidate for this position?' : 'What other jobs would you be more interested in?';
				return !this.state.submitted ?
							<div>
								<form onSubmit={this.handleFeedback.bind(this)}>
									<div>{title}</div>
									<textarea rows="4" cols="50" value={this.state.feedback} onChange={this.handleChange.bind(this)}></textarea> 
									<input type="submit" value="Submit Response"/>
								</form> 
							</div>
							: 
							<div>
								<h4>Your Feedback:</h4>
								<p>{this.state.feedback}</p>
								<p>This has been sent to us.</p>
							</div>
		}
	}
}

export default Buttons