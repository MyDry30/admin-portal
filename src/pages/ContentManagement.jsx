import { useEffect, useRef } from "react";
import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import SubNav from "../features/ui/subNav/SubNav";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const ContentManagement = () => {
	const navigate = useNavigate();
	const searchResult = useRef("");

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		const search = searchResult.current.value;
		console.log(search);
	};

	useEffect(() => {
		navigate("/content-management/30-day-challenge");
	}, []);

	return (
		<>
			<ControlBar>
				<h2>Content Mangement</h2>
				<Button>Export</Button>
			</ControlBar>
			<Container>
				<form onSubmit={handleSearchSubmit}>
					<SearchInput>
						<input
							ref={searchResult}
							type="text"
							placeholder="Search"
						/>
						<MdSearch />
					</SearchInput>
				</form>
				<SubNav>
					<NavLink to="/content-management/30-day-challenge">
						30 Day Challenge
					</NavLink>
					<NavLink to="/content-management/coaches">Coaches</NavLink>
					<NavLink to="/content-management/toolkit">Toolkit</NavLink>
				</SubNav>
				<Outlet />
			</Container>
		</>
	);
};

export default ContentManagement;
