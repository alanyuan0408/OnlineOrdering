import orderReducer from "./orderReducer";
import loginReducer from "./loginReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
	orderReducer: orderReducer,
	loginReducer: loginReducer
})

export default rootReducer;
