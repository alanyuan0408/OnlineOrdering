import { ADD_ORDER, CLEAR_ORDERS } from "../constants/action-types";
import { PizzaItems, DrinkItems, SideItems } from '../assets/MenuItems';

const InitOrderState = (ItemsGroup) => {
	console.log(ItemsGroup);
	var initialState = {
	  orders: []
	};

	for (var step = 0; step < ItemsGroup.length in ItemsGroup){
		console.log(items)
		for (var item in items){
			console.log(item)
			var append_item = item;
			initialState.orders.push(append_item)
		}
	}

	console.log(initialState)
	return initialState;
}

const rootReducer = (state = 
	InitOrderState([PizzaItems, DrinkItems, SideItems]), action) => {

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