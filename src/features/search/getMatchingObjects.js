const getMatchingObjects = (searchTerm, data) => {
	const matchingObjects = [];
	const search = searchTerm.toLowerCase();

	for (const obj of data) {
		for (const key in obj) {
			if (obj[key]?.toString().toLowerCase().includes(search)) {
				matchingObjects.push(obj);
				break;
			}
		}
	}

	return matchingObjects;
};

export default getMatchingObjects;
