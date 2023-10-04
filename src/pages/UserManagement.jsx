import { Outlet, useNavigate } from "react-router";
import ControlBar from "../features/ui/controlBar/ControlBar";
import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";
import SubNav from "../features/ui/subNav/SubNav";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";

const UserManagement = () => {
	const navigate = useNavigate();
	const searchResult = useRef("");

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		const search = searchResult.current.value;
		console.log(search);
	};

	useEffect(() => {
		// navigate("/user-management/active");
	}, []);

	return (
		<>
			<ControlBar>
				<h2>User Management</h2>
				<Button>Export</Button>
			</ControlBar>
			<Container>
				<div className="flex-row justify-sb">
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
					<Button>Filter</Button>
				</div>
				<SubNav>
					<NavLink to="/user-management/active">Active</NavLink>
					<NavLink to="/user-management/inactive">Inactive</NavLink>
				</SubNav>
				<Outlet />
			</Container>
		</>
	);
};

export default UserManagement;
