import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let lastPartURL = window.location.href.split("//")[1].split("/")[window.location.href.split("//")[1].split("/").length - 1]
let queryArray = lastPartURL.split("?")[lastPartURL.split("?").length - 1].split("&").map(function(str){
	return {
		key    : str.split("=")[0],
		value  : str.split("=")[1],
	}
})
let feedIntoObject = function (arr) {
	var Obj = {}
	for ( var i = 0; i < arr.length; i++ ) {
		Obj[arr[i].key.toString()] = arr[i].value
	}
	return Obj
}
let queryObj = feedIntoObject(queryArray)

console.log(queryArray)

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
	feedback            : "",
	queryObj            : queryObj,
	isSubmitted         : false,
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
//		queryObj            : queryObj,
// 	}

// 	let store = configureStore(initialState)

// 	render(
// 		<Provider store={store}>
// 			<App />
// 		</Provider>,
// 		document.getElementById('app')
// 	)

// })