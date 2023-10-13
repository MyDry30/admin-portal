import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import getCoaches from "../features/api/getCoaches";
import { NavLink, useNavigate } from "react-router-dom";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import Button from "../features/ui/button/Button";
import SubNav from "../features/ui/subNav/SubNav";
import useSearch from "../features/search/useSearch";

const columns = [
	{ field: "firstName", headerName: "First Name", width: 130 },
	{ field: "lastName", headerName: "Last Name", width: 130 },
	{ field: "description", headerName: "Descripton", width: 300 },
	{ field: "link", headerName: "Link", width: 150 },
	{ field: "status", headerName: "Status", width: 90 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const ContentManagementCoaches = () => {
	const navigate = useNavigate();
	const [coaches, setCoaches] = useState([]);
	const { searchRef, searchResults, handleSearchInput, setSearchResults } =
		useSearch(coaches);

	const getAllCoaches = async () => {
		try {
			const response = await getCoaches();
			const data = response.data?.map((coach, index) => ({
				...coach,
				id: index,
			}));
			setCoaches(data);
			setSearchResults(data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getAllCoaches();
	}, []);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate("/coaches/12345");
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
				<div className="flex-row column-gap-05">
					<Button
						onClick={() => navigate("/coaches/add")}
						type="filled"
					>
						Add
					</Button>
				</div>
			</div>
			<SubNav>
				<NavLink to="/content-management/30-day-challenge">
					30 Day Challenge
				</NavLink>
				<NavLink to="/content-management/coaches">Coaches</NavLink>
				<NavLink to="/content-management/toolkit">Toolkit</NavLink>
			</SubNav>
			<DataGrid
				rows={searchResults}
				columns={columns}
				initialState={initialState}
				pageSizeOptions={[10, 25, 50]}
				onRowClick={handleRowClick}
				className="custom-data-grid"
			/>
		</>
	);
};

export default ContentManagementCoaches;
