import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'



let initialState = {
	isAvailable         : true,
	answer              : {
								isAnswered: false,
								isAccepted: false
							},
	name                : "Joey",
	job                 : {  
								jobTitle       : "Promote me",
								jobDescription : "Use promoting skillz to promote me",
							},
	rateOffered         : 1000,
}

let store = configureStore(initialState)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)

// $.post('/getUserInfo',user).then(function (response) {
	
// 	let initialState = {
// 		isAvailable         : response.data.isAvailable,
// 		answer              : {
// 									isAnswered: false,
// 									isAccepted: false
// 								}
// 		name                : response.data.name,
// 		job                 : {  
// 									jobTitle       : response.data.job.jobTitle,
// 									jobDescription : response.data.job.jobDescription,
// 								},
// 		rateOffered         : response.data.rateOffered,
// 	}

// 	let store = configureStore(initialState)

// 	render(
// 		<Provider store={store}>
// 			<App />
// 		</Provider>,
// 		document.getElementById('app')
// 	)

// })