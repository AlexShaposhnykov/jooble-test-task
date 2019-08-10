import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const devtools = window.devToolsExtension || (() => (noop) => noop);

export default function configureStore(initialState = {}) {
	const enhancers = [ applyMiddleware(thunk), devtools() ];

	const store = createStore(rootReducer, initialState, compose(...enhancers));

	return store;
}
