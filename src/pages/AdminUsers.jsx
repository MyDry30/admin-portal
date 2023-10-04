import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Container from "../features/ui/container/Container";
import { useEffect, useRef } from "react";
import SubNav from "../features/ui/subNav/SubNav";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import ControlBar from "../features/ui/controlBar/ControlBar";
import Button from "../features/ui/button/Button";

const AdminUsers = () => {
	const searchRef = useRef("");
	const navigate = useNavigate();

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		const search = searchRef.current.value;
		console.log(search);
	};

	useEffect(() => {
		// navigate("/admin-users/active");
	}, []);

	return (
		<>
			<ControlBar>
				<h2>Admin Users</h2>
				<div className="flex-row column-gap-05">
					<Button>Export</Button>
					<Button type="filled">Add User</Button>
				</div>
			</ControlBar>
			<Container>
				<form onSubmit={handleSearchSubmit}>
					<SearchInput>
						<input
							ref={searchRef}
							placeholder="Search"
							type="text"
						/>
						<MdSearch />
					</SearchInput>
				</form>
				<SubNav>
					<NavLink to="/admin-users/active">Active</NavLink>
					<NavLink to="/admin-users/disabled">Disabled</NavLink>
				</SubNav>
				<Outlet />
			</Container>
		</>
	);
};

export default AdminUsers;
