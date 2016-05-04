import React, { Component } from 'react'
import PageContent from './PageContent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'


class App extends Component {

	render () {
		return ( 
			<div>
				<h1>Regarding your job offer</h1>
				<PageContent status={this.props.status}/>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
