import { ADD_ORDER, CLEAR_ORDERS, DELETE_ORDER } from "../constants/action-types";
import { PizzaItems, DrinkItems, SideItems } from '../assets/MenuItems';

const InitOrderState = (ItemsGroup) => {
	var orders = [];

	for (var item in ItemsGroup){

		// Set the Orders as a set of Value: Key
		var tempItem = ItemsGroup[item];
		orders[tempItem.id] = {
			itemId: tempItem.id,
			itemTitle: tempItem.itemTitle,
			itemDescription: tempItem.itemDescription,
			quantity: 0
		}
	}

	return {
		orders
	};
}

const rootReducer = (state =
	InitOrderState(PizzaItems.concat(DrinkItems,SideItems)), action) => {

  switch (action.type) {
    case ADD_ORDER:
    	return { ...state, orders: addOrder(action.payload, state.orders) };
   	case CLEAR_ORDERS:
   		return { ...state, orders: [] };
   	case DELETE_ORDER:
   		return { ...state, orders: [] };
    default:
    	return state;
  }
};

const addOrder = (payload, orders) => {
	var newOrders = orders;
	newOrders[payload.itemId].quantity = parseInt(payload.quantity);
	return newOrders;
}

export default rootReducer;