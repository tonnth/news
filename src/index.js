import React from "react";
import "./index.css";
import App from "./App";
import {BrowserRouter, Route} from "react-router-dom";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

render(
	<Provider store={store}>
		<BrowserRouter>
			<Route component={App}/>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);


