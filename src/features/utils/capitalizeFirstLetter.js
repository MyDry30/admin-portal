const capitalizeFirstLetter = (str) => {
	return str.replace(/\b\w/g, (l) => l.toUpperCase());
};

export default capitalizeFirstLetter;
