import React, { Component } from 'react'
import Buttons from './Buttons'


class PageContent extends Component {

	render() {

		if (this.props.wholeState.status) {
			return  <div>
						<div>This is the description of your assignment and the due date. Do you accept?</div>
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