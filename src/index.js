import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from "react-redux";
import store from "./stores/index";
import App from './components/appComponent';
import registerServiceWorker from './registerServiceWorker';

import { addArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;

ReactDOM.render(
   	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
