import { NavLink, Outlet } from "react-router-dom";
import SubNav from "../features/ui/subNav/SubNav";
import { useRef } from "react";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import Button from "../features/ui/button/Button";

const ContentMangementToolkit = () => {
	const searchRef = useRef("");

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		const search = searchRef.current.value;
		console.log(search);
	};

	return (
		<>
			<Outlet />
		</>
	);
};

export default ContentMangementToolkit;
