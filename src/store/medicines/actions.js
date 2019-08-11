import { getType, getTypeWithModifiers } from 'store/utils';

import api from 'apiSingleton';

export const types = {
	...getType('DELETE_MEDICINE_FROM_LIST'),
	...getTypeWithModifiers('FETCH_MEDICINE'),
	...getTypeWithModifiers('DELETE_MEDICINE')
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
