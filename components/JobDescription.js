import React, { Component } from 'react'
import Buttons from './Buttons'
import classNames from 'classnames'


class JobDescription extends Component {

	render() {

		if (!this.props.wholeState.answer.isAnswered && !this.props.wholeState.isSubmitted) {
			return  <div>
						<h2>Job Description:</h2>
						<h6>{this.props.wholeState.job.jobDescription}  Do you accept?</h6>
					</div>
		} else if (this.props.wholeState.answer.isAnswered && !this.props.wholeState.isSubmitted) {
			return  <div>
						<h2>Please provide us with feedback:</h2>
					</div>
		} else {
			return  <div>
						<h2>Thanks for your response!</h2>
					</div>
		}

	}
}

export default JobDescription