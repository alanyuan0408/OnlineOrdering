import { ADD_ORDER, CLEAR_ORDERS, DELETE_ORDER } from "../constants/action-types";
import { PizzaItems, DrinkItems, SideItems } from '../assets/MenuItems';

const InitOrderState = (ItemsGroup) => {
	var orders = [];

	for (var item in ItemsGroup){

		var tempItem = ItemsGroup[item];
		orders.push({
			itemId: tempItem.id,
			itemTitle: tempItem.itemTitle,
			itemDescription: tempItem.itemDescription,
			quantity: 0
		})
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
   	case DELETE_ORDER:
   		return { ...state, orders: [] };
    default:
    	return state;
  }
};

export default rootReducer;