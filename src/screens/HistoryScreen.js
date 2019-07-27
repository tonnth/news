import React from "react";
import {connect} from "react-redux";
import Index from "../components/ArticleList";
import _ from "lodash";

const HistoryScreen = props => {
	return (
		<div>
			<Index {...props} />
		</div>
	);
};

const mapStateToProps = state => ({
	articles: _.get(state, "history.articles")
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(HistoryScreen);
