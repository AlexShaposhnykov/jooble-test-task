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

		case types.UPDATE_MEDICINE_IN_LIST:
			return {
				...state,
				medicine: action.updatedMedicine
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

const addMedicine = (state = { adding: false, isAdded: false, error: '' }, action) => {
	switch (action.type) {
		case types.ADD_MEDICINE: {
			return {
				...state,
				adding: true
			};
		}

		case types.ADD_MEDICINE_SUCCESS: {
			return {
				...state,
				isAdded: true,
				adding: false
			};
		}

		case types.ADD_MEDICINE_FAILURE: {
			return {
				...state,
				isAdded: false,
				adding: false,
				error: action.error
			};
		}

		case types.CLEAR_MEDICINE_ADDING_STATE: {
			return {
				...state,
				isAdded: false,
				adding: false,
				error: ''
			};
		}

		default: {
			return state;
		}
	}
};

const editMedicine = (state = { editing: false, isEdited: false, error: '' }, action) => {
	switch (action.type) {
		case types.EDIT_MEDICINE: {
			return {
				...state,
				editing: true
			};
		}

		case types.EDIT_MEDICINE_SUCCESS: {
			return {
				...state,
				isEdited: true,
				editing: false
			};
		}

		case types.EDIT_MEDICINE_FAILURE: {
			return {
				...state,
				isEdited: false,
				editing: false,
				error: action.error
			};
		}

		case types.CLEAR_MEDICINE_EDITING_STATE: {
			return {
				...state,
				isEdited: false,
				editing: false,
				error: ''
			};
		}

		default: {
			return state;
		}
	}
};

export default combineReducers({ medicineList, deleteMedicine, addMedicine, editMedicine });
