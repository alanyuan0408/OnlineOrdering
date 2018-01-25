import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './components/headerComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
