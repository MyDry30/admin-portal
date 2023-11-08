import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import getMedia from "../features/api/media/getMedia";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import Button from "../features/ui/button/Button";
import SubNav from "../features/ui/subNav/SubNav";
import { NavLink, useNavigate } from "react-router-dom";
import useSearch from "../features/search/useSearch";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import capitalizeFirstLetter from "../features/utils/capitalizeFirstLetter";

const columns = [
	{ field: "title", headerName: "Title", width: 200 },
	{ field: "type", headerName: "Type", width: 200 },
	{ field: "description", headerName: "Description", width: 300 },
	{ field: "duration", headerName: "Duration", width: 200 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const ContentManagementMedia = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const [media, setMedia] = useState([]);
	const { searchRef, searchResults, handleSearchInput, setSearchResults } =
		useSearch(media);

	const handleGetMedia = async () => {
		try {
			const response = await getMedia(user.accessToken);
			setMedia(response.data);
			setSearchResults(response.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (user.accessToken) {
			handleGetMedia();
		}
	}, [user]);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate(`/media/${row._id}`);
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
						onClick={() => navigate("/media/add")}
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
				<NavLink to="/content-management/post-challenge">
					Post Challenge
				</NavLink>
				<NavLink to="/content-management/coaches">Coaches</NavLink>
				<NavLink to="/content-management/toolkit">Toolkit</NavLink>
			</SubNav>
			<SubNav>
				{/* <NavLink to="/content-management/toolkit/forums">
					Forums
				</NavLink> */}
				<NavLink to="/content-management/toolkit/media">
					Media Files
				</NavLink>
			</SubNav>
			<DataGrid
				rows={searchResults.map((result) => ({
					...result,
					type: capitalizeFirstLetter(result.type),
				}))}
				columns={columns}
				initialState={initialState}
				pageSizeOptions={[10, 25, 50]}
				onRowClick={handleRowClick}
				className="custom-data-grid"
				getRowId={(row) => row["_id"]}
			/>
		</>
	);
};

export default ContentManagementMedia;
