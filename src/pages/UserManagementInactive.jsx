import { DataGrid } from "@mui/x-data-grid";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchInput from "../features/ui/searchInput/SearchInput";
import useSearch from "../features/search/useSearch";
import { MdSearch } from "react-icons/md";
import SubNav from "../features/ui/subNav/SubNav";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import getAllUsers from "../features/api/users/getAllUsers";
import prettifyDate from "../features/utils/prettifyDate";
import capitalizeFirstLetter from "../features/utils/capitalizeFirstLetter";

const columns = [
	{ field: "firstName", headerName: "First Name", width: 130 },
	{ field: "lastName", headerName: "Last Name", width: 130 },
	{ field: "email", headerName: "Email", width: 200 },
	{ field: "journey", headerName: "Journey", width: 130 },
	{ field: "updatedAt", headerName: "Last Active", width: 200 },
	{ field: "createdAt", headerName: "Created At", width: 200 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const UserManagementInactive = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const [users, setUsers] = useState(null);
	const { searchRef, searchResults, handleSearchInput, setSearchResults } =
		useSearch(users);

	const getInactiveUsers = async (accessToken) => {
		try {
			const response = await getAllUsers(accessToken);
			const disabledUsers = response.data?.filter(
				(user) => user.status === "disabled" && user.role === "customer"
			);
			setUsers(disabledUsers);
			setSearchResults(disabledUsers);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (user.accessToken) {
			getInactiveUsers(user.accessToken);
		}
	}, [user]);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate(`/users/${row._id}`);
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
			{users ? (
				<DataGrid
					rows={searchResults.map((result) => ({
						...result,
						journey: capitalizeFirstLetter(result.journey),
						updatedAt: prettifyDate(result.updatedAt),
						createdAt: prettifyDate(result.createdAt),
					}))}
					columns={columns}
					initialState={initialState}
					onRowClick={handleRowClick}
					pageSizeOptions={[10, 25, 50]}
					className="custom-data-grid"
					getRowId={(row) => row["_id"]}
				/>
			) : (
				<h2>Loading...</h2>
			)}
		</>
	);
};

export default UserManagementInactive;
