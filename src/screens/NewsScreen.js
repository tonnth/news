import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchNews, loadMore, openArticle} from "../redux/action";
import ArticleList from "../components/ArticleList";
import _ from "lodash";

const NewsScreen = props => {
	const { fetchNews } = props;

	useEffect(() => {
		fetchNews();
	}, []);

	return (
		<div>
			<ArticleList {...props}/>
		</div>
	);
};

const mapState = state => ({
	articles: _.get(state, "news.articles"),
	fetching: _.get(state, "news.fetching"),
	error: _.get(state, "news.error"),
	endOfList: _.get(state, "news.endOfList"),
});

const mapDispatch = {
	fetchNews,
	loadMore,
	openArticle
};

export default connect(
	mapState,
	mapDispatch,
)(NewsScreen);
