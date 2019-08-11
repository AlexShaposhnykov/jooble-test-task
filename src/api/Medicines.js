import Base from './Base';

export default class Medicines extends Base {
	getMedicineList = () =>
		this.apiClient
			.collection('medicines_alexander')
			.get()
			.then((res) => res.docs.map((medicine) => ({ id: medicine.id, ...medicine.data() })));

	deleteMedicine = ({ id }) => this.apiClient.collection('medicines_alexander').doc(id).delete();
}
