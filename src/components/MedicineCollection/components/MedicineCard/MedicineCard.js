import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Box, Typography, Button, Paper, Grid } from '@material-ui/core';

class MedicineCard extends PureComponent {
	static propTypes = {
		medicine: PropTypes.shape({
			id: PropTypes.string,
			code: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.string.isRequired,
			shelfLife: PropTypes.number.isRequired,
			compositionAndFormOfRelease: PropTypes.string,
			indication: PropTypes.string,
			сontraindications: PropTypes.string
		}).isRequired,
		onDelete: PropTypes.func.isRequired,
		onEdit: PropTypes.func.isRequired
	};

	handleMedicineEdit = () => {
		const { medicine, onEdit } = this.props;

		onEdit(medicine);
	};

	handleMedicineDelete = () => {
		const { medicine, onDelete } = this.props;

		onDelete(medicine.id);
	};

	render() {
		const { medicine } = this.props;

		return (
			<Box width="100%" mb={2}>
				<Paper>
					<Box p={2} onDoubleClick={this.handleMedicineEdit}>
						<Grid container spacing={2}>
							<Grid item xs={6} md={3}>
								<Typography variant="body1">Code: {medicine.code}</Typography>
							</Grid>
							<Grid item xs={6} md={3}>
								<Typography variant="body1">Name: {medicine.name}</Typography>
							</Grid>
							<Grid item xs={6} md={3}>
								<Typography variant="body1">Price: {medicine.price}</Typography>
							</Grid>
							<Grid item xs={12} md={3}>
								<Box display="flex" justifyContent="flex-end">
									<Box mr={2}>
										<Button variant="contained" color="primary" onClick={this.handleMedicineEdit}>
											Edit
										</Button>
									</Box>
									<Button variant="contained" color="secondary" onClick={this.handleMedicineDelete}>
										Delete
									</Button>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Paper>
			</Box>
		);
	}
}

export default MedicineCard;
