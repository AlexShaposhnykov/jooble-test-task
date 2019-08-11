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

		case types.DELETE_MEDICINE_FROM_LIST:
			return {
				...state,
				medicine: state.medicine.filter((medicineItem) => medicineItem.id !== action.id)
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

const deleteMedicine = (state = { deleting: false, isDeleted: false, error: '' }, action) => {
	switch (action.type) {
		case types.DELETE_MEDICINE: {
			return {
				...state,
				deleting: true
			};
		}

		case types.DELETE_MEDICINE_SUCCESS: {
			return {
				...state,
				isDeleted: true,
				deleting: true
			};
		}

		case types.DELETE_MEDICINE_FAILURE: {
			return {
				...state,
				isDeleted: false,
				deleting: false,
				error: action.error
			};
		}

		default: {
			return state;
		}
	}
};

export default combineReducers({ medicineList, deleteMedicine });
