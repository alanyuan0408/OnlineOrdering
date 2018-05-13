import { ADD_ORDER, CLEAR_ORDERS } from "../constants/action-types";

const initialState = {
  orders: []
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_ORDER:
    	return { ...state, orders: [...state.orders, action.payload] };
   	case CLEAR_ORDERS:
   		return { ...state, orders: [] };
    default:
    	return state;
  }
};

export default rootReducer;