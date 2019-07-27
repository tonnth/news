import React, {useRef} from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {ROUTES} from "../../staticValue";
import {connect} from "react-redux";
import {fetchNews} from "../../redux/action";
import _ from "lodash";
import "./style.css";
import classNames from "class-names";

const Index = ({ history, fetchNews, location }) => {
	const searchDebounced = useRef(_.debounce(fetchNews, 300));

	const handleSearch = event => {
		const keyword = event.target.value;
		searchDebounced.current({ q: keyword });
	};

	const goToHistory = () => {
		history.push(ROUTES.history);
	};

	const goToNews = () => {
		history.push(ROUTES.news);
	};

	return (
		<div className="search-bar-container">
			<div className="input-container">
				<input type="text"
							 className="input input-width"
							 onChange={handleSearch} placeholder="Filter News..."/>
			</div>
			<div className='button-container'>
				<a className={classNames("button", { "focus": location.pathname.includes(ROUTES.news) })}
					 onClick={goToNews}
					 aria-current="page">News</a>
				<a className={classNames("button", { "focus": location.pathname.includes(ROUTES.history) })}
					 onClick={goToHistory} aria-current="page">History</a>
			</div>
		</div>
	);
};

const mapDispatch = {
	fetchNews
};

export default compose(withRouter, connect(
	null,
	mapDispatch,
))(Index);
