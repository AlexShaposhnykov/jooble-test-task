import React from 'react';

import { Container } from '@material-ui/core';

import MedicineList from 'components/MedicineCollection';

const App = ({ children }) => (
	<Container maxWidth="lg">
		{children}

		<MedicineList />
	</Container>
);

export default App;
