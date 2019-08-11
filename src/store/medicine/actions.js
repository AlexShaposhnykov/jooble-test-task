import { getType, getTypeWithModifiers } from 'store/utils';

import api from 'apiSingleton';

import { getMedicineList } from './selectors';

import { getObjectWithoutKey } from './utils';

export const types = {
	...getType('DELETE_MEDICINE_FROM_LIST'),
	...getType('ADD_MEDICINE_TO_LIST'),
	...getType('UPDATE_MEDICINE_IN_LIST'),
	...getType('CLEAR_MEDICINE_ADDING_STATE'),
	...getType('CLEAR_MEDICINE_EDITING_STATE'),
	...getTypeWithModifiers('FETCH_MEDICINE'),
	...getTypeWithModifiers('DELETE_MEDICINE'),
	...getTypeWithModifiers('ADD_MEDICINE'),
	...getTypeWithModifiers('EDIT_MEDICINE')
};

export const fetchMedicine = () => async (dispatch) => {
	try {
		dispatch({ type: types.FETCH_MEDICINE });

		const medicine = await api.medicine.getMedicineList();

		dispatch({ type: types.FETCH_MEDICINE_SUCCESS, medicine });
	} catch (error) {
		dispatch({ type: types.FETCH_MEDICINE_FAILURE, error });
	}
};

export const deleteMedicineFromList = (id) => async (dispatch) => {
	try {
		dispatch({ type: types.DELETE_MEDICINE });

		await api.medicine.deleteMedicine({ id });

		dispatch({ type: types.DELETE_MEDICINE_SUCCESS });
		dispatch({ type: types.DELETE_MEDICINE_FROM_LIST, id });
	} catch (error) {
		dispatch({ type: types.DELETE_MEDICINE_FAILURE, error });
	}
};

export const addMedicineToList = (medicine) => async (dispatch) => {
	try {
		dispatch({ type: types.ADD_MEDICINE });

		await api.medicine.addMedicine({ medicine });

		dispatch({ type: types.ADD_MEDICINE_SUCCESS });
		dispatch(fetchMedicine());
	} catch (error) {
		dispatch({ type: types.ADD_MEDICINE_FAILURE, error });
	}
};

export const clearMedicineAddingState = () => (dispatch) => {
	dispatch({ type: types.CLEAR_MEDICINE_ADDING_STATE });
};

export const editMedicineInList = (medicine) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.EDIT_MEDICINE });

		const medicineWithoutId = getObjectWithoutKey(medicine, 'id');

		await api.medicine.editMedicine({ id: medicine.id, medicine: medicineWithoutId });

		dispatch({ type: types.EDIT_MEDICINE_SUCCESS });

		const allMedicine = getMedicineList(getState());
		const indexOfMedicineToUpdate = allMedicine.findIndex((item) => item.id === medicine.id);
		const updatedMedicine = Object.assign([], allMedicine, { [indexOfMedicineToUpdate]: medicine });

		dispatch({ type: types.UPDATE_MEDICINE_IN_LIST, updatedMedicine });
	} catch (error) {
		dispatch({ type: types.EDIT_MEDICINE_FAILURE, error });
	}
};

export const clearMedicineEditingState = () => (dispatch) => {
	dispatch({ type: types.CLEAR_MEDICINE_EDITING_STATE });
};
