import { useRef, useState } from "react";
import getMatchingObjects from "./getMatchingObjects";

const useSearch = (data) => {
	const searchRef = useRef("");
	const [searchResults, setSearchResults] = useState(data);

	const handleSearchInput = () => {
		const search = searchRef.current.value;
		if (!search) {
			setSearchResults(data);
		} else {
			const searchMatches = getMatchingObjects(search, data);
			setSearchResults(searchMatches);
		}
	};

	return {
		searchRef,
		searchResults,
		handleSearchInput,
		setSearchResults,
	};
};

export default useSearch;
