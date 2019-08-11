import { combineReducers } from 'redux';

import { types } from './actions';

const login = (state = { authenticating: false, isAuthenticated: false, error: '' }, action) => {
	switch (action.type) {
		case types.LOGIN: {
			return {
				...state,
				authenticating: true
			};
		}

		case types.LOGIN_SUCCESS: {
			return {
				...state,
				isAuthenticated: true,
				authenticating: false
			};
		}

		case types.LOGIN_FAILURE: {
			return {
				...state,
				isAuthenticated: false,
				authenticating: false,
				error: action.error
			};
		}

		case types.CLEAR_LOGIN_STATE: {
			return {
				...state,
				isAuthenticated: false,
				authenticating: false,
				error: ''
			};
		}

		default: {
			return state;
		}
	}
};

export default combineReducers({ login });
