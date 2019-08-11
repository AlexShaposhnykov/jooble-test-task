export const getType = (type) => ({
	[`${type}`]: `${type}`
});

export const getTypeWithModifiers = (type) => ({
	[`${type}`]: `${type}`,
	[`${type}_REQUEST`]: `${type}_REQUEST`,
	[`${type}_SUCCESS`]: `${type}_SUCCESS`,
	[`${type}_FAILURE`]: `${type}_FAILURE`
});
