import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { mainReducer } from "./reducers/mainReducer"

const store = createStore(
	mainReducer,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(thunk),
	),
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
)
