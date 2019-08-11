import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { showModal } from 'store/modals/actions';

import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import MedicineCollection from 'components/MedicineCollection';

class MedicinePage extends PureComponent {
	handleAddNewMedicineClick = () => {
		this.props.showModal('EditAddNewMedicine');
	};

	render() {
		return (
			<div>
				<MedicineCollection />

				<Fab
					color="primary"
					aria-label="add"
					style={{ position: 'absolute', bottom: '24px', right: '24px' }}
					onClick={this.handleAddNewMedicineClick}
				>
					<AddIcon />
				</Fab>
			</div>
		);
	}
}

export default connect(null, { showModal })(MedicinePage);
