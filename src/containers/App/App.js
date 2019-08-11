import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { Container } from '@material-ui/core';

import MedicinePage from 'containers/MedicinePage';

import EditAddNewMedicineModal from 'containers/modals/EditAddNewMedicineModal';

const App = ({ children }) => (
	<Container maxWidth="lg" style={{ height: '100vh', position: 'relative' }}>
		<CssBaseline />

		{children}

		<MedicinePage />

		<EditAddNewMedicineModal />
	</Container>
);

export default App;
