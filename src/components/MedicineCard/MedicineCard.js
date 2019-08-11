import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Box, Typography, Button } from '@material-ui/core';

export default class MedicineCard extends PureComponent {
	static propTypes = {
		medicine: PropTypes.shape({
			id: PropTypes.string.isRequired,
			code: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			shelfLife: PropTypes.number.isRequired,
			compositionAndFormOfRelease: PropTypes.string.isRequired,
			indication: PropTypes.string.isRequired,
			сontraindications: PropTypes.string.isRequired
		}).isRequired,
		onDelete: PropTypes.func.isRequired,
		onEdit: PropTypes.func.isRequired
	};

	handleMedicineEdit = () => {};

	handleMedicineDelete = () => {
		const { medicine, onDelete } = this.props;

		onDelete(medicine.id);
	};

	render() {
		return (
			<Box>
				<Typography>test</Typography>
				<Button variant="contained" color="primary" onClick={this.handleMedicineEdit}>
					Edit
				</Button>
				<Button variant="contained" color="secondary" onClick={this.handleMedicineDelete}>
					Delete
				</Button>
			</Box>
		);
	}
}
