import { useRef } from "react";
import DaysCalendar from "../features/ui/daysCalendar/DaysCalendar";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import Button from "../features/ui/button/Button";
import SubNav from "../features/ui/subNav/SubNav";
import { NavLink } from "react-router-dom";

const ContentManagementChallenge = () => {
	const searchRef = useRef("");

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		const search = searchRef.current.value;
		console.log(search);
	};

	return (
		<>
			<div className="flex-row justify-sb">
				<form onSubmit={handleSearchSubmit}>
					<SearchInput>
						<input
							ref={searchRef}
							type="text"
							placeholder="Search"
						/>
						<MdSearch />
					</SearchInput>
				</form>
			</div>
			<SubNav>
				<NavLink to="/content-management/30-day-challenge">
					30 Day Challenge
				</NavLink>
				<NavLink to="/content-management/coaches">Coaches</NavLink>
				<NavLink to="/content-management/toolkit">Toolkit</NavLink>
			</SubNav>
			<DaysCalendar />
		</>
	);
};

export default ContentManagementChallenge;
