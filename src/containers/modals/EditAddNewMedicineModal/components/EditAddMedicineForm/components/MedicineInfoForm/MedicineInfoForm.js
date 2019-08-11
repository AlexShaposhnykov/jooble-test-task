import React from 'react';

import { Field, ErrorMessage } from 'formik';

import { TextField, Grid, Typography } from '@material-ui/core';

const MedicineInfoForm = () => (
	<div>
		<Grid container spacing={1}>
			<Grid item xs={12} md={6}>
				<Typography variant="body2">Code</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Field name="code">
					{({ field, form }) => (
						<TextField
							{...field}
							fullWidth
							error={Boolean(form.touched[field.name] && form.errors[field.name])}
							helperText={<ErrorMessage name={field.name} />}
						/>
					)}
				</Field>
			</Grid>
			<Grid item xs={12} md={6}>
				<Typography variant="body2">Name</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Field name="name">
					{({ field, form }) => (
						<TextField
							{...field}
							fullWidth
							error={Boolean(form.touched[field.name] && form.errors[field.name])}
							helperText={<ErrorMessage name={field.name} />}
						/>
					)}
				</Field>
			</Grid>
			<Grid item xs={12} md={6}>
				<Typography variant="body2">Price</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Field name="price">
					{({ field, form }) => (
						<TextField
							{...field}
							fullWidth
							error={Boolean(form.touched[field.name] && form.errors[field.name])}
							helperText={<ErrorMessage name={field.name} />}
						/>
					)}
				</Field>
			</Grid>
			<Grid item xs={12} md={6}>
				<Typography variant="body2">Expiration date</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Field name="shelfLife">
					{({ field, form }) => (
						<TextField
							{...field}
							fullWidth
							error={Boolean(form.touched[field.name] && form.errors[field.name])}
							helperText={<ErrorMessage name={field.name} />}
						/>
					)}
				</Field>
			</Grid>
		</Grid>
	</div>
);

export default MedicineInfoForm;
