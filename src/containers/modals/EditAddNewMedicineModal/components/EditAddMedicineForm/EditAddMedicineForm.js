import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import * as yup from 'yup';
import medicineValidations from 'config/validations/medicine';

import { Box, Button, Typography } from '@material-ui/core';

import MedicineInfoForm from './components/MedicineInfoForm';
import MedicineCompositionAndUsageForm from './components/MedicineCompositionAndUsageForm';

export class EditAddMedicineForm extends Component {
	static propTypes = {
		initialFormValues: PropTypes.shape({
			id: PropTypes.string,
			code: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.string,
			shelfLife: PropTypes.string,
			compositionAndFormOfRelease: PropTypes.string,
			indication: PropTypes.string,
			сontraindications: PropTypes.string
		}),
		onAdd: PropTypes.func.isRequired,
		onEdit: PropTypes.func.isRequired
	};

	state = {
		activeFormStep: 0
	};

	get isEditMode() {
		const { initialFormValues } = this.props;

		return initialFormValues && initialFormValues.id;
	}

	get formFields() {
		return [
			'code',
			'name',
			'price',
			'shelfLife',
			'compositionAndFormOfRelease',
			'indication',
			'сontraindications'
		];
	}

	get formSteps() {
		return [
			{
				fields: this.formFields.slice(0, 4),
				component: <MedicineInfoForm />
			},
			{
				fields: this.formFields.slice(4),
				component: <MedicineCompositionAndUsageForm />
			}
		];
	}

	get initialFormValues() {
		const { initialFormValues } = this.props;

		const formFields = this.formFields;

		const initialValues = formFields.reduce((formValues, fieldKey) => {
			const fieldValue = initialFormValues[fieldKey] || '';

			return { ...formValues, [fieldKey]: fieldValue };
		}, {});

		return initialValues;
	}

	handleFormStepDecrement = () => {
		const { activeFormStep } = this.state;

		if (activeFormStep === 0) {
			return;
		}

		this.setState({ activeFormStep: activeFormStep - 1 });
	};

	handleFormStepValidate = (formikProps) => () => {
		formikProps.validateForm().then((formErrors) => {
			this.syncFieldsWithFormStep(formikProps);

			if (this.isCurrentFormStepValid(formErrors)) {
				this.incrementFormStep();
			}
		});
	};

	syncFieldsWithFormStep = (formikProps) => {
		const { activeFormStep } = this.state;

		const touchedFieldsInStep = this.formSteps[activeFormStep].fields.reduce((touchedFields, currentField) => {
			return { ...touchedFields, [currentField]: true };
		}, {});

		formikProps.setTouched({ ...touchedFieldsInStep });
	};

	isCurrentFormStepValid = (formErrors) => {
		const { activeFormStep } = this.state;

		const currentFormFields = this.formSteps[activeFormStep].fields;

		const fieldsWithErrors = Object.keys(formErrors).filter((fieldsWithError) =>
			currentFormFields.includes(fieldsWithError)
		);

		return fieldsWithErrors.length === 0;
	};

	incrementFormStep = () => {
		const { activeFormStep } = this.state;

		this.setState({ activeFormStep: activeFormStep + 1 });
	};

	render() {
		const { onCancel, onAdd, onEdit } = this.props;
		const { activeFormStep } = this.state;

		return (
			<Box p={2}>
				<Box mb={4}>
					<Typography variant="h6" align="center">
						{this.isEditMode ? 'Edit' : 'Add'} medicine {activeFormStep + 1}/{this.formSteps.length}
					</Typography>
				</Box>

				<Formik
					initialValues={this.initialFormValues}
					validationSchema={yup.object().shape({
						code: medicineValidations.code,
						name: medicineValidations.name,
						price: medicineValidations.price,
						shelfLife: medicineValidations.expirationDate,
						compositionAndFormOfRelease: medicineValidations.compositionAndFormOfRelease,
						indication: medicineValidations.indication,
						сontraindications: medicineValidations.сontraindications
					})}
					onSubmit={this.isEditMode ? onEdit : onAdd}
				>
					{(formikProps) => (
						<Fragment>
							{this.formSteps[activeFormStep].component}

							<Box mt={4} display="flex" justifyContent="center">
								<Box mr={2}>
									<Button color="secondary" onClick={onCancel}>
										Cancel
									</Button>
								</Box>
								<Box mr={2}>
									<Button
										color="primary"
										disabled={formikProps.isSubmitting}
										onClick={
											activeFormStep !== 0 ? (
												this.handleFormStepDecrement
											) : (
												this.handleFormStepValidate(formikProps)
											)
										}
									>
										{activeFormStep !== 0 ? 'Prev' : 'Next'}
									</Button>
								</Box>
								{activeFormStep === this.formSteps.length - 1 && (
									<Box>
										<Button
											variant="contained"
											color="primary"
											disabled={formikProps.isSubmitting}
											onClick={formikProps.submitForm}
										>
											{this.isEditMode ? 'Edit' : 'Create'}
										</Button>
									</Box>
								)}
							</Box>
						</Fragment>
					)}
				</Formik>
			</Box>
		);
	}
}

EditAddMedicineForm.defaultProps = {
	initialFormValues: {}
};

export default EditAddMedicineForm;
