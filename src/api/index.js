import MedicinesAPI from './Medicines';
import AuthAPI from './Auth';

export default function({ apiClient, authClient } = {}) {
	if (!apiClient) {
		throw new Error('[apiClient] required');
	}

	return {
		auth: new AuthAPI({ apiClient: authClient }),
		medicines: new MedicinesAPI({ apiClient })
	};
}
