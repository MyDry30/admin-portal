import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import getForums from "../features/api/getForums";

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
	const [forums, setForums] = useState([]);

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

	return (
		<DataGrid
			rows={forums}
			columns={columns}
			initialState={initialState}
			pageSizeOptions={[10, 25, 50]}
		/>
	);
};

export default ContentManagementForums;
