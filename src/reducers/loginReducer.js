import { ADD_ORDER } from "../constants/action-types";

const loginReducer = (state =[], action) => {

  	switch (action.type) {
    	case ADD_ORDER:
      		return state.concat([action.text]);
    	default:
      		return state;
  	}
};

export default loginReducer;
