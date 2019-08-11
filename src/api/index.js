import MedicineAPI from './Medicine';
import AuthAPI from './Auth';

export default function({ apiClient, authClient } = {}) {
	if (!apiClient) {
		throw new Error('[apiClient] required');
	}

	return {
		auth: new AuthAPI({ apiClient: authClient }),
		medicine: new MedicineAPI({ apiClient })
	};
}
