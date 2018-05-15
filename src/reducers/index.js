import { ADD_ORDER, CLEAR_ORDERS } from "../constants/action-types";
import { PizzaItems, DrinkItems, SideItems } from '../assets/MenuItems';

const InitOrderState = (ItemsGroup) => {
	var orders = []

	for (var item in ItemsGroup){
		ItemsGroup[item]["quantity"] = 0;
		orders.push(ItemsGroup[item]);
	}

	return { 
		orders: orders
	};
}

const rootReducer = (state = 
	InitOrderState(PizzaItems.concat(DrinkItems,SideItems)), action) => {

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