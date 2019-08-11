import { getTypeWithModifiers } from 'store/utils';

import api from 'apiSingleton';

export const types = {
	...getTypeWithModifiers('LOGIN')
};

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: types.LOGIN });

		await api.auth.login(email, password);

		dispatch({ type: types.LOGIN_SUCCESS });
	} catch (error) {
		dispatch({ type: types.LOGIN_FAILURE });
	}
};

export const clearLoginState = () => (dispatch) => {
	dispatch({ type: types.CLEAR_LOGIN_STATE });
};
