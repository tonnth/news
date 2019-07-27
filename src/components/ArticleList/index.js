import React, {memo, useEffect} from "react";
import Article from "../Article";
import "./style.css";

const Loading = memo(() => {
	return <div className='list-loading'>Loading...</div>;
});

const Empty = memo(() => {
	return <div className='list-empty'>Do not have any article</div>;
});

const Error = memo(() => {
	return <div className='list-error'>Failed to load news</div>;
});

const ArticleList = ({ error, loadMore, articles, fetching, openArticle, endOfList }) => {
	const scrollListener = () => {
		if (window.innerHeight + window.scrollY + 300 >= document.body.offsetHeight) {
			if (!fetching && !endOfList) loadMore();
		}
	};

	useEffect(() => {
		if (typeof loadMore === "function") window.addEventListener("scroll", scrollListener);
		return () => {
			if (typeof loadMore === "function") window.removeEventListener("scroll", scrollListener);
		};
	});

	if (articles.length === 0 && !fetching && !error) return <Empty/>;

	return (
		<div>
			<div>
				{articles.map((article, index) =>
					<Article
						key={article.url + index}
						article={article}
						openArticle={openArticle}
					/>)}
			</div>
			{fetching && <Loading/>}
			{error && <Error/>}
		</div>
	);
};

export default memo(ArticleList);
