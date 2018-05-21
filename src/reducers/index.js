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
   		var newState = InitOrderState(PizzaItems.concat(DrinkItems,SideItems))
   		return newState ;
   	case DELETE_ORDER:
   		return { ...state, orders: deleteOrder(action.payload, state.orders) };
    default:
    	return state;
  }
};

const addOrder = (payload, orders) => {
	var newOrders = orders;
	newOrders[payload.itemId].quantity = parseInt(payload.quantity, 10);
	return newOrders;
}

const deleteOrder = (payload, orders) => {
	var newOrders = orders;
	newOrders[payload].quantity = 0;
	return newOrders;
}

export default rootReducer;