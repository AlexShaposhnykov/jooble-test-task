import Base from './Base';

export default class Auth extends Base {
	login = (email, password) => this.apiClient.signInWithEmailAndPassword(email, password);
}
