import { MdSearch } from "react-icons/md";
import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import SearchInput from "../features/ui/searchInput/SearchInput";
import SubNav from "../features/ui/subNav/SubNav";
import { NavLink, Outlet } from "react-router-dom";
import { useRef } from "react";

const ContentManagement = () => {
	const searchRef = useRef("");

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		const search = searchRef.current.value;
		console.log(search);
	};

	return (
		<>
			<ControlBar>
				<h2>Content Management</h2>
				<Button>Export</Button>
			</ControlBar>
			<Container>
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
					<div className="flex-row column-gap-05">
						<Button type="filled">Add</Button>
					</div>
				</div>
				<SubNav>
					<NavLink to="30-day-challenge">30 Day Challenge</NavLink>
					<NavLink to="coaches">Coaches</NavLink>
					<NavLink to="toolkit">Toolkit</NavLink>
				</SubNav>
				<Outlet />
			</Container>
		</>
	);
};

export default ContentManagement;
