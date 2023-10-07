import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import getForums from "../features/api/getForums";
import { NavLink, useNavigate } from "react-router-dom";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import Button from "../features/ui/button/Button";
import SubNav from "../features/ui/subNav/SubNav";

const columns = [
	{ field: "title", headerName: "Title", width: 200 },
	{ field: "description", headerName: "Description", width: 300 },
	{ field: "link", headerName: "Link", width: 200 },
	{ field: "status", headerName: "Status", width: 200 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const ContentManagementForums = () => {
	const navigate = useNavigate();
	const searchRef = useRef("");
	const [forums, setForums] = useState([]);

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		const search = searchRef.current.value;
		console.log(search);
	};

	const handleGetForums = async () => {
		try {
			const response = await getForums();
			setForums(
				response.data?.map((forum, index) => ({ ...forum, id: index }))
			);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		handleGetForums();
	}, []);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate("/forums/12345");
	};

	return (
		<>
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
					<Button
						onClick={() => navigate("/forums/add")}
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
			<SubNav>
				<NavLink to="/content-management/toolkit/forums">
					Forums
				</NavLink>
				<NavLink to="/content-management/toolkit/media">
					Media Files
				</NavLink>
			</SubNav>
			<DataGrid
				rows={forums}
				columns={columns}
				initialState={initialState}
				pageSizeOptions={[10, 25, 50]}
				onRowClick={handleRowClick}
				className="custom-data-grid"
			/>
		</>
	);
};

export default ContentManagementForums;
