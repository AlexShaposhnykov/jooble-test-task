import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { Container } from '@material-ui/core';

import withAuthentication from 'hoc/withAuthentication';

import MedicinePage from 'containers/MedicinePage';
import EditAddNewMedicineModal from 'containers/modals/EditAddNewMedicineModal';

const App = () => (
	<Container maxWidth="lg" style={{ height: '100vh', position: 'relative' }}>
		<CssBaseline />

		<MedicinePage />

		<EditAddNewMedicineModal />
	</Container>
);

export default withAuthentication(App);
