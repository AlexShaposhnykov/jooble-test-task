import React, { PureComponent, Fragment } from 'react';

import { Box, CircularProgress } from '@material-ui/core';
import MedicineCard from 'components/MedicineCard';

export class MedicineList extends PureComponent {
	renderMedicine = () => {
		const { medicine, onDelete, onEdit } = this.props;

		if (!medicine.length) {
			return null;
		}

		return medicine.map((data) => (
			<MedicineCard key={medicine.id} medicine={data} onDelete={onDelete} onEdit={onEdit} />
		));
	};

	render() {
		const { isLoading } = this.props;

		return (
			<Fragment>
				<Box pt={3} display="flex" justifyContent="center">
					{this.renderMedicine()}
				</Box>

				{isLoading && <CircularProgress color="primary" />}
			</Fragment>
		);
	}
}

export default MedicineList;
