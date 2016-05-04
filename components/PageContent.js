import React, { Component } from 'react'
import Buttons from './Buttons'
import classNames from 'classnames'

// let cx = classNames.bind(document.getElementById('style'))


class PageContent extends Component {

	render() {
		let text = !this.props.wholeState.answer.isAnswered ? 'This is the description of your assignment and the due date. Do you accept?' : 'Thanks for your response.';
		// let hide = cx({
		// 	hideIt : this.props.wholeState.answer.isAnswered
		// })
		if (this.props.wholeState.isAvailable) {
			return  <div>
						<div>{text}</div>
						
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