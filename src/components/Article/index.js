import React from "react";
import "./style.css";

const Article = ({ article, openArticle }) => {
	const { title, source, url, urlToImage, description } = article;

	const handleClick = async () => {
		openArticle(article);
		window.open(url);
	};

	return (
		<div className='article-container'>
			<div onClick={handleClick}>
				<img src={urlToImage} alt={title} className='image'/>
				<div className='article-content'>
					<div className='article-title'>{title}</div>
					<div className='article-source'>{source.name}</div>
					<p className='article-description'>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Article;
