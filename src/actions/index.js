import { ADD_ARTICLE, CLEAR_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({
	type: ADD_ARTICLE,
	payload: article
});

export const clearArticles = () => ({
	type: CLEAR_ARTICLE
});