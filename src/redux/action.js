import NewsAPI from "newsapi";
import {API_KEY, NEWS_SOURCES} from "../staticValue";
import types from "./types";
import _ from "lodash";

const newsAPI = new NewsAPI(API_KEY);

export const fetchNews = options => dispatch => {
	dispatch({ type: types.NEWS_FETCHING });

	return newsAPI.v2.everything({
		...options,
		sources: NEWS_SOURCES
	})
		.then(response => {
			dispatch({
				type: types.NEWS_FETCH_SUCCESS,
				articles: response.articles
			});
		}).catch(error => {
			dispatch({
				type: types.NEWS_FETCH_ERROR,
				error: error
			});
		});
};

export const loadMore = () => (dispatch, getState) => {
	const state = getState();
	const options = {
		sources: NEWS_SOURCES,
		page: _.get(state, "news.page") + 1
	};

	const keyword = _.get(state, "news.keyword");
	if (keyword) options.q = keyword;

	dispatch({ type: types.NEWS_FETCHING });

	return newsAPI.v2.everything(options)
		.then(response => {
			dispatch({
				type: types.NEWS_LOAD_MORE_SUCCESS,
				articles: response.articles
			});
		});
};

export const openArticle = article => (dispatch, getState) => {
	let historyArticles = _.get(getState(), "history.articles");
	let temp = [article, ...historyArticles];
	localStorage.setItem("history", JSON.stringify(temp));

	dispatch({
		type: types.OPEN_ARTICLE,
		article
	});
};

export const fetchHistory = () => (dispatch) => {
	dispatch({
		type: types.HISTORY_FETCHING
	});
	let history = JSON.parse(localStorage.getItem("history")) || [];
	dispatch({
		type: types.HISTORY_FETCH_SUCCESS,
		articles: history
	});
};

