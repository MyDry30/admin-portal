import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import getAppUsers from "../features/api/getAppUsers";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import SubNav from "../features/ui/subNav/SubNav";
import useSearch from "../features/search/useSearch";

const columns = [
	{ field: "firstName", headerName: "First Name", width: 130 },
	{ field: "lastName", headerName: "Last Name", width: 130 },
	{ field: "email", headerName: "Email", width: 200 },
	{ field: "journey", headerName: "Journey", width: 130 },
	{ field: "lastActive", headerName: "Last Active", width: 200 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const AdminUsersDisabled = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const { searchRef, searchResults, handleSearchInput, setSearchResults } =
		useSearch(users);

	const getUsers = async () => {
		try {
			const response = await getAppUsers();
			const disabledUsers = response.data?.filter(
				(user) => user.status === "disabled"
			);
			setUsers(disabledUsers);
			setSearchResults(disabledUsers);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate("/users/123");
	};

	return (
		<>
			<SearchInput>
				<input
					ref={searchRef}
					placeholder="Search"
					type="text"
					onChange={handleSearchInput}
				/>
				<MdSearch />
			</SearchInput>
			<SubNav>
				<NavLink to="/admin-users/active">Active</NavLink>
				<NavLink to="/admin-users/disabled">Disabled</NavLink>
			</SubNav>
			<DataGrid
				rows={searchResults}
				columns={columns}
				initialState={initialState}
				pageSizeOptions={[10, 25, 50]}
				className="custom-data-grid"
				onRowClick={handleRowClick}
			/>
		</>
	);
};

export default AdminUsersDisabled;
