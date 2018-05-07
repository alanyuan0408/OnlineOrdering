import { ADD_ARTICLE, CLEAR_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_ARTICLE:
    	return { ...state, articles: [...state.articles, action.payload] };
   	case CLEAR_ARTICLE:
   		console.log("hi");
   		return { ...state, articles: [] };
    default:
    	return state;
  }
};

export default rootReducer;