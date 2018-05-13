import { ADD_ORDER, CLEAR_ORDERS } from "../constants/action-types";

export const addOrder = order => ({
	type: ADD_ORDER,
	payload: order
});

export const clearOrders = () => ({
	type: CLEAR_ORDERS
});