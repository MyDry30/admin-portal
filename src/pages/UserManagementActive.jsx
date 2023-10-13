import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import getAppUsers from "../features/api/getAppUsers";
import useSearch from "../features/search/useSearch";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import SubNav from "../features/ui/subNav/SubNav";

const columns = [
	{ field: "firstName", headerName: "First Name", width: 130 },
	{ field: "lastName", headerName: "Last Name", width: 130 },
	{ field: "email", headerName: "Email", width: 200 },
	{ field: "journey", headerName: "Journey", width: 130 },
	{ field: "lastActive", headerName: "Last Active", width: 200 },
	{ field: "createdAt", headerName: "Created At", width: 200 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const UserManagementActive = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const { searchRef, searchResults, handleSearchInput, setSearchResults } =
		useSearch(users);

	const getUsers = async () => {
		try {
			const response = await getAppUsers();
			const activeUsers = response.data?.filter(
				(user) => user.status === "active"
			);
			setUsers(activeUsers);
			setSearchResults(activeUsers);
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
			<div className="flex-row justify-sb">
				<SearchInput>
					<input
						ref={searchRef}
						type="text"
						placeholder="Search"
						onChange={handleSearchInput}
					/>
					<MdSearch />
				</SearchInput>
			</div>
			<SubNav>
				<NavLink to="/user-management/active">Active</NavLink>
				<NavLink to="/user-management/inactive">Inactive</NavLink>
			</SubNav>
			<DataGrid
				rows={searchResults}
				columns={columns}
				initialState={initialState}
				onRowClick={handleRowClick}
				pageSizeOptions={[10, 25, 50]}
				className="custom-data-grid"
			/>
		</>
	);
};

export default UserManagementActive;
