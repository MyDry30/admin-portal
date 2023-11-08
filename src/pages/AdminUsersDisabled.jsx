import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import SubNav from "../features/ui/subNav/SubNav";
import useSearch from "../features/search/useSearch";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import getAllUsers from "../features/api/users/getAllUsers";
import prettifyDate from "../features/utils/prettifyDate";

const columns = [
	{ field: "firstName", headerName: "First Name", width: 130 },
	{ field: "lastName", headerName: "Last Name", width: 130 },
	{ field: "email", headerName: "Email", width: 200 },
	{ field: "phoneNumber", headerName: "Phone", width: 130 },
	{ field: "updatedAt", headerName: "Last Active", width: 200 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const AdminUsersDisabled = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const [users, setUsers] = useState(null);
	const { searchRef, searchResults, handleSearchInput, setSearchResults } =
		useSearch(users);

	const getUsers = async (accessToken) => {
		try {
			const response = await getAllUsers(accessToken);
			const disabledUsers = response.data?.filter(
				(user) => user.status === "disabled" && user.role === "admin"
			);
			setUsers(disabledUsers);
			setSearchResults(disabledUsers);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (user.accessToken) {
			getUsers(user.accessToken);
		}
	}, [user]);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate(`/users/admin/${row._id}`);
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
			{users ? (
				<DataGrid
					rows={searchResults.map((result) => ({
						...result,
						updatedAt: prettifyDate(result.updatedAt),
					}))}
					columns={columns}
					initialState={initialState}
					pageSizeOptions={[10, 25, 50]}
					className="custom-data-grid"
					onRowClick={handleRowClick}
					getRowId={(row) => row["_id"]}
				/>
			) : (
				<h2>Loading...</h2>
			)}
		</>
	);
};

export default AdminUsersDisabled;
