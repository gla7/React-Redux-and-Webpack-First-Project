import React, { Component } from 'react'
import Buttons from './Buttons'


class PageContent extends Component {


	// constructor(props, context) {
	// 	super(props, context)
	// 	this.state = {status: false}
	// }


	render() {
		

		if (this.props.status) {
			return  <div>
						<div>This is the description of your assignment and the due date. Do you accept?</div>
						<Buttons />
					</div>
		} else {
			return  <div>
						<div>We are sorry to inform that all the positions have been taken.</div>
					</div>
		}

	}
}

export default PageContent