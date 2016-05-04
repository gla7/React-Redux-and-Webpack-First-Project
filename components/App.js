import React, { Component } from 'react'
import PageContent from './PageContent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'


class App extends Component {

	render () {
		console.log(this)
		return ( 
			<div>
				<h1>Regarding {this.props.wholeStatus.name}'s job offer: {this.props.wholeStatus.job.jobTitle}</h1>
				<PageContent wholeState={this.props.wholeStatus} allActions={this.props.actions}/>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		wholeStatus: state
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
