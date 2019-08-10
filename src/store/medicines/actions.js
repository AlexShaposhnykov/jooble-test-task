import { getTypeWithModifiers } from 'store/utils';

import api from 'apiSingleton';

export const types = {
	...getTypeWithModifiers('FETCH_MEDICINE')
};

export const fetchMedicine = () => async (dispatch) => {
	try {
		dispatch({ type: types.FETCH_MEDICINE });

		const medicineList = await api.medicine.getMedicineList();

		dispatch({ type: types.FETCH_MEDICINE_SUCCESS, medicineList });
	} catch (error) {
		dispatch({ type: types.FETCH_MEDICINE_FAILURE, error });
	}
};
