import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store';

import App from './App';

const store = configureStore({});

const ConfiguredApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<ConfiguredApp />, document.getElementById('root'));
