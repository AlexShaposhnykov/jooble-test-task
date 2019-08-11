import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
	addMedicineToList,
	editMedicineInList,
	clearMedicineAddingState,
	clearMedicineEditingState
} from 'store/medicine/actions';
import { hideModal } from 'store/modals/actions';

import { getMedicineAddingError, isMedicineAdded, isMedicineEdited } from 'store/medicine/selectors';

import connectModal from 'hoc/connectModal';

import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { Dialog } from '@material-ui/core';

import EditAddMedicineForm from './components/EditAddMedicineForm';

class EditAddNewMedicineModal extends PureComponent {
	static propTypes = {
		initialFormValues: PropTypes.shape({
			id: PropTypes.string,
			code: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.string.isRequired,
			shelfLife: PropTypes.string.isRequired,
			compositionAndFormOfRelease: PropTypes.string,
			indication: PropTypes.string,
			сontraindications: PropTypes.string
		})
	};

	componentDidUpdate() {
		const { clearMedicineAddingState, isMedicineAdded, clearMedicineEditingState, isMedicineEdited } = this.props;

		if (isMedicineAdded) {
			clearMedicineAddingState();
		}

		if (isMedicineEdited) {
			clearMedicineEditingState();
		}

		this.closeModal();
	}

	closeModal = () => {
		const { hideModal } = this.props;

		hideModal('EditAddNewMedicine');
	};

	handleMedicineAdd = (medicine) => {
		const { addMedicineToList } = this.props;

		addMedicineToList(medicine);
	};

	handleMedicineEdit = (medicineWithoutId) => {
		const { editMedicineInList, initialFormValues } = this.props;

		editMedicineInList({ id: initialFormValues.id, ...medicineWithoutId });
	};

	render() {
		const { show, initialFormValues } = this.props;

		return (
			<Dialog
				open={show}
				fullScreen={isWidthDown('sm', this.props.width)}
				aria-labelledby="add-or-edit-medicine-dialog"
				onClose={this.closeModal}
			>
				<EditAddMedicineForm
					initialFormValues={initialFormValues}
					onCancel={this.closeModal}
					onAdd={this.handleMedicineAdd}
					onEdit={this.handleMedicineEdit}
				/>
			</Dialog>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	initialFormValues: ownProps.initialFormValues,
	medicineAddingError: getMedicineAddingError(state),
	isMedicineAdded: isMedicineAdded(state),
	isMedicineEdited: isMedicineEdited(state)
});

export default connect(mapStateToProps, {
	hideModal,
	addMedicineToList,
	editMedicineInList,
	clearMedicineAddingState,
	clearMedicineEditingState
})(withWidth()(connectModal('EditAddNewMedicine')(EditAddNewMedicineModal)));
