import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import getCoaches from "../features/api/getCoaches";

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
	const [coaches, setCoaches] = useState([]);

	const getAllCoaches = async () => {
		try {
			const response = await getCoaches();
			setCoaches(
				response.data?.map((coach, index) => ({ ...coach, id: index }))
			);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getAllCoaches();
	}, []);

	return (
		<DataGrid
			rows={coaches}
			columns={columns}
			initialState={initialState}
			pageSizeOptions={[10, 25, 50]}
		/>
	);
};

export default ContentManagementCoaches;
