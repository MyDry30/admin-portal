import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import getMedia from "../features/api/getMedia";

const columns = [
	{ field: "title", headerName: "Title", width: 200 },
	{ field: "type", headerName: "Type", width: 200 },
	{ field: "description", headerName: "Description", width: 300 },
	{ field: "status", headerName: "Status", width: 200 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const ContentManagementMedia = () => {
	const [media, setMedia] = useState([]);

	const handleGetMedia = async () => {
		try {
			const response = await getMedia();
			setMedia(response.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		handleGetMedia();
	}, []);

	return (
		<DataGrid
			rows={media}
			columns={columns}
			initialState={initialState}
			pageSizeOptions={[10, 25, 50]}
		/>
	);
};

export default ContentManagementMedia;
