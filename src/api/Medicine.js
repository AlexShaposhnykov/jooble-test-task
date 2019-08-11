import Base from './Base';

export default class Medicine extends Base {
	getMedicineList = () =>
		this.apiClient
			.collection('medicines_alexander')
			.get()
			.then((res) => res.docs.map((medicine) => ({ id: medicine.id, ...medicine.data() })));

	deleteMedicine = ({ id }) => this.apiClient.collection('medicines_alexander').doc(id).delete();

	addMedicine = ({ medicine }) => this.apiClient.collection('medicines_alexander').add(medicine);

	editMedicine = ({ id, medicine }) => this.apiClient.collection('medicines_alexander').doc(id).update(medicine);
}
