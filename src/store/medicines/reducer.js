import { combineReducers } from 'redux';

import { types } from './actions';

const medicineList = (state = { isLoading: false, medicine: [], error: '' }, action) => {
	switch (action.type) {
		case types.FETCH_MEDICINE:
			return {
				...state,
				isLoading: true
			};

		case types.FETCH_MEDICINE_SUCCESS:
			return {
				...state,
				medicine: action.medicine,
				isLoading: false
			};

		case types.FETCH_MEDICINE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default combineReducers({ medicineList });
