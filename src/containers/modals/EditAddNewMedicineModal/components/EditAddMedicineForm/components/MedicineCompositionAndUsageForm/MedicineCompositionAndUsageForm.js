import React from 'react';

import { Field, ErrorMessage } from 'formik';

import { TextField, Grid, Typography } from '@material-ui/core';

const MedicineCompositionAndUsageForm = () => (
	<div>
		<Grid container spacing={1}>
			<Grid item xs={12} md={6}>
				<Typography variant="body2">Composition and releases form</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Field name="compositionAndFormOfRelease">
					{({ field, form }) => (
						<TextField
							{...field}
							fullWidth
							multiline
							rows={3}
							variant="outlined"
							error={form.touched[field.name] && form.errors[field.name]}
							helperText={<ErrorMessage name={field.name} />}
						/>
					)}
				</Field>
			</Grid>
			<Grid item xs={12} md={6}>
				<Typography variant="body2">Indication</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Field name="indication">
					{({ field, form }) => (
						<TextField
							{...field}
							fullWidth
							multiline
							rows={3}
							variant="outlined"
							error={form.touched[field.name] && form.errors[field.name]}
							helperText={<ErrorMessage name={field.name} />}
						/>
					)}
				</Field>
			</Grid>
			<Grid item xs={12} md={6}>
				<Typography variant="body2">Contraindications</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Field name="сontraindications">
					{({ field, form }) => (
						<TextField
							{...field}
							fullWidth
							multiline
							rows={3}
							variant="outlined"
							error={form.touched[field.name] && form.errors[field.name]}
							helperText={<ErrorMessage name={field.name} />}
						/>
					)}
				</Field>
			</Grid>
		</Grid>
	</div>
);

export default MedicineCompositionAndUsageForm;
