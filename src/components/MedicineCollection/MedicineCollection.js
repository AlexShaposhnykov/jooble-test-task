import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { showModal } from 'store/modals/actions';
import { fetchMedicine, deleteMedicineFromList } from 'store/medicine/actions';

import { isMedicineLoading, getMedicineLoadingError, getMedicineList } from 'store/medicine/selectors';

import MedicineList from './components/MedicineList';

export class MedicineCollectionContainer extends Component {
	static propTypes = {
		isMedicineLoading: PropTypes.bool.isRequired,
		medicineList: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.isRequired,
				code: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				price: PropTypes.string.isRequired,
				shelfLife: PropTypes.string.isRequired,
				compositionAndFormOfRelease: PropTypes.string,
				indication: PropTypes.string,
				сontraindications: PropTypes.string
			})
		).isRequired,
		medicineLoadingError: PropTypes.string
	};

	componentDidMount() {
		this.props.fetchMedicine();
	}

	handleMedicineEdit = (medicineToEdit) => {
		const { showModal } = this.props;

		showModal('EditAddNewMedicine', { initialFormValues: medicineToEdit });
	};

	handleMedicineDelete = (id) => {
		this.props.deleteMedicineFromList(id);
	};

	render() {
		const { isMedicineLoading, medicineList, medicineLoadingError } = this.props;

		return (
			<MedicineList
				isLoading={isMedicineLoading}
				medicine={medicineList}
				error={medicineLoadingError}
				onEdit={this.handleMedicineEdit}
				onDelete={this.handleMedicineDelete}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	isMedicineLoading: isMedicineLoading(state),
	medicineLoadingError: getMedicineLoadingError(state),
	medicineList: getMedicineList(state)
});

export default connect(mapStateToProps, { fetchMedicine, deleteMedicineFromList, showModal })(
	MedicineCollectionContainer
);
