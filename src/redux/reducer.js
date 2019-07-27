import actionTypes from "./types";

const defaultState = {
	news: {
		articles: [],
		page: 0,
		keyword: "",
		fetching: true,
		error: null,
		endOfList: false,
	},
	history: {
		articles: [],
		fetching: true,
		error: null,
	}
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.NEWS_FETCHING:
			return {
				...state,
				news: {
					...state.news,
					fetching: true
				}
			};

		case actionTypes.NEWS_FETCH_SUCCESS:
			return {
				...state,
				news: {
					...state.news,
					articles: action.articles,
					fetching: false,
					page: 1,
					endOfList: action.articles.length < 20,
				}
			};

		case actionTypes.NEWS_FETCH_ERROR:
			return {
				...state,
				news: {
					...state.news,
					articles: [],
					fetching: false,
					error: action.error,
				}
			};

		case actionTypes.NEWS_LOAD_MORE_SUCCESS:
			return {
				...state,
				news: {
					...state.news,
					articles: [...state.news.articles, ...action.articles],
					fetching: false,
					page: state.news.page + 1,
					error: action.error,
					endOfList: action.articles.length < 20,
				}
			};

		case actionTypes.OPEN_ARTICLE:
			return {
				...state,
				history: {
					articles: [action.article, ...state.history.articles]
				}
			};

		case actionTypes.HISTORY_FETCH_SUCCESS:
			return {
				...state,
				history: {
					articles: action.articles
				}
			};

		case actionTypes.HISTORY_FETCH_ERROR:
			return {
				...state,
				history: {
					...state.news,
					articles: [],
					fetching: false,
					error: action.error,
				}
			};

		default:
			return state;
	}
}
