import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { fetchMedicine, deleteMedicineFromList } from 'store/medicines/actions';
import { isMedicineLoading, getMedicineLoadingError, getMedicineList } from 'store/medicines/selectors';

import MedicineList from './components/MedicineList';

export class MedicineListContainer extends Component {
	static propTypes = {
		isMedicineLoading: PropTypes.bool.isRequired,
		medicineList: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				code: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				shelfLife: PropTypes.number.isRequired,
				compositionAndFormOfRelease: PropTypes.string.isRequired,
				indication: PropTypes.string.isRequired,
				сontraindications: PropTypes.string.isRequired
			})
		).isRequired,
		medicineLoadingError: PropTypes.string
	};

	componentDidMount() {
		this.props.fetchMedicine();
	}

	handleMedicineEdit = (id, editedMedicine) => {
		console.log(id);
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

const mapDispatchToProps = { fetchMedicine, deleteMedicineFromList };

export default connect(mapStateToProps, mapDispatchToProps)(MedicineListContainer);
