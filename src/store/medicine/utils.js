export const getObjectWithoutKey = (obj, keyToRemove) =>
	Object.keys(obj).filter((key) => key !== keyToRemove).reduce((newObj, key) => {
		newObj[key] = obj[key];

		return obj;
	}, {});
