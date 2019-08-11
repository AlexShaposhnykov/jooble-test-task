import * as yup from 'yup';

const code = yup.string().required('Field is required').min(5, 'Code must be from 5 to 10 symbols long.');

const name = yup.string().required('Field is required').min(5, 'Name must be from 5 to 100 symbols long.');

const price = yup
	.number()
	.required('Field is required')
	.min(0.01, 'Price must be more than 0.01 and less then 1 000 000.')
	.max(1000000, 'Price must be more than 0.01 and less then 1 000 000.');

const expirationDate = yup
	.number()
	.required('Field is required')
	.min(1, 'Expiration date must be more than 1 day and less then 1000 days.')
	.max(1000, 'Expiration date must be more than 1 day and less then 1000 days.');

const compositionAndFormOfRelease = yup.string().max(2000, 'Composition and releases must be 2000 symbols max.');

const indication = yup.string().max(2000, 'Indication form must be 2000 symbols max.');

const сontraindications = yup.string().max(2000, 'Contraindications must be 2000 symbols max.');

export default { code, name, price, expirationDate, compositionAndFormOfRelease, indication, сontraindications };
