import React, { Component } from 'react'
import JobDescription from './JobDescription'
import Buttons from './Buttons'
import classNames from 'classnames'

// let cx = classNames.bind(document.getElementById('style'))


class PageContent extends Component {

	render() {
		// let text = !this.props.wholeState.answer.isAnswered ?  this.props.wholeState.job.jobDescription +'Do you accept?' : 'Thanks for your response.';
		// last line is associated with the following JSX in the below render method: <div>{text}</div>
		// let hide = cx({
		// 	hideIt : this.props.wholeState.answer.isAnswered
		// })
		if (this.props.wholeState.isAvailable) {
			return  <div>
						<JobDescription wholeState={this.props.wholeState} />
						
						<Buttons wholeState={this.props.wholeState} allActions={this.props.allActions}/>
					</div>
		} else {
			return  <div>
						<div>We are sorry to inform that all the positions have been taken.</div>
					</div>
		}

	}
}

export default PageContent