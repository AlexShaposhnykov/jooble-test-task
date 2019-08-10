export const getTypeWithModifiers = (constant) => {
	return {
		[`${constant}`]: `${constant}`,
		[`${constant}_REQUEST`]: `${constant}_REQUEST`,
		[`${constant}_SUCCESS`]: `${constant}_SUCCESS`,
		[`${constant}_FAILURE`]: `${constant}_FAILURE`
	};
};
