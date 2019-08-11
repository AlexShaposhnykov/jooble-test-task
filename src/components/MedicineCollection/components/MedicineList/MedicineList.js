import React, { PureComponent, Fragment } from 'react';

import { Box, CircularProgress, Typography } from '@material-ui/core';
import MedicineCard from '../MedicineCard';

export class MedicineList extends PureComponent {
	renderMedicine = () => {
		const { medicine, isLoading, onDelete, onEdit } = this.props;

		if (!medicine.length && !isLoading) {
			return (
				<Typography variant="h6" align="center">
					No medicine found
				</Typography>
			);
		}

		return medicine.map((data) => (
			<MedicineCard key={data.id} medicine={data} onDelete={onDelete} onEdit={onEdit} />
		));
	};

	render() {
		const { isLoading } = this.props;

		return (
			<Fragment>
				<Box pt={3} display="flex" justifyContent="center" flexDirection="column">
					{this.renderMedicine()}
				</Box>

				{isLoading && <CircularProgress color="primary" />}
			</Fragment>
		);
	}
}

export default MedicineList;
