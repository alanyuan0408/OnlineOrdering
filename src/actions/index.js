import { ADD_ORDER, CLEAR_ORDERS, DELETE_ORDERS } from "../constants/action-types";

export const addOrder = order => ({
	type: ADD_ORDER,
	payload: order
});

export const clearOrders = () => ({
	type: CLEAR_ORDERS
});

export const deleteOrder = order => ({
	type: DELETE_ORDERS,
	payload: order
});