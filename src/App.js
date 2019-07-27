import React, {useEffect} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import SearchBar from "./components/SearchBar";
import {ROUTES} from "./staticValue";
import NewsScreen from "./screens/NewsScreen";
import {fetchHistory} from "./redux/action";
import "./App.css";
import HistoryScreen from "./screens/HistoryScreen";

const App = props => {
	const { fetchHistory } = props;
	useEffect(() => {
		fetchHistory();
	}, []);

	return (
		<div className="container">
			<div className='col'>
				<SearchBar/>
				<Switch>
					<Redirect exact from="/" to={ROUTES.news}/>
					<Route path={ROUTES.news} component={NewsScreen}/>
					<Route exact path={ROUTES.history} component={HistoryScreen}/>
				</Switch>
			</div>
		</div>
	);
};

const mapDispatch = {
	fetchHistory
};


export default connect(null, mapDispatch)(App);
