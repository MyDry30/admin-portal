import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "firstName", headerName: "First name", width: 130 },
	{ field: "lastName", headerName: "Last name", width: 130 },
	{
		field: "age",
		headerName: "Age",
		type: "number",
		width: 90,
	},
];
const rows = [
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 35 },
	{ id: 6, lastName: "Melisandre", firstName: "Miss", age: 150 },
	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
	{
		id: 10,
		lastName: "Smith",
		firstName: "John",
		age: 28,
	},
	{
		id: 11,
		lastName: "Johnson",
		firstName: "Emily",
		age: 35,
	},
	{
		id: 12,
		lastName: "Brown",
		firstName: "Michael",
		age: 42,
	},
	{
		id: 13,
		lastName: "Taylor",
		firstName: "Jennifer",
		age: 21,
	},
	{
		id: 14,
		lastName: "Miller",
		firstName: "Daniel",
		age: 30,
	},
	{
		id: 15,
		lastName: "Davis",
		firstName: "Jessica",
		age: 50,
	},
	{
		id: 16,
		lastName: "Wilson",
		firstName: "Andrew",
		age: 23,
	},
	{
		id: 17,
		lastName: "Martinez",
		firstName: "Maria",
		age: 29,
	},
	{
		id: 18,
		lastName: "Anderson",
		firstName: "James",
		age: 36,
	},
	{
		id: 19,
		lastName: "Jackson",
		firstName: "Linda",
		age: 48,
	},
	{
		id: 20,
		lastName: "Harris",
		firstName: "William",
		age: 19,
	},
	{
		id: 21,
		lastName: "Clark",
		firstName: "Sarah",
		age: 27,
	},
	{
		id: 22,
		lastName: "Lewis",
		firstName: "Robert",
		age: 33,
	},
	{
		id: 23,
		lastName: "Young",
		firstName: "Karen",
		age: 40,
	},
	{
		id: 24,
		lastName: "Walker",
		firstName: "Christopher",
		age: 25,
	},
	{
		id: 25,
		lastName: "Hall",
		firstName: "Amanda",
		age: 31,
	},
	{
		id: 26,
		lastName: "Wright",
		firstName: "Matthew",
		age: 45,
	},
	{
		id: 27,
		lastName: "Turner",
		firstName: "Susan",
		age: 22,
	},
	{
		id: 28,
		lastName: "White",
		firstName: "Richard",
		age: 39,
	},
	{
		id: 29,
		lastName: "Thomas",
		firstName: "Nancy",
		age: 26,
	},
	{
		id: 30,
		lastName: "Martin",
		firstName: "Joseph",
		age: 34,
	},
	{
		id: 31,
		lastName: "Thompson",
		firstName: "Carol",
		age: 43,
	},
	{
		id: 32,
		lastName: "Garcia",
		firstName: "David",
		age: 20,
	},
	{
		id: 33,
		lastName: "Hernandez",
		firstName: "Patricia",
		age: 37,
	},
	{
		id: 34,
		lastName: "Martinez",
		firstName: "John",
		age: 44,
	},
	{
		id: 35,
		lastName: "Robinson",
		firstName: "Linda",
		age: 29,
	},
	{
		id: 36,
		lastName: "King",
		firstName: "Mark",
		age: 26,
	},
	{
		id: 37,
		lastName: "Davis",
		firstName: "Donna",
		age: 33,
	},
	{
		id: 38,
		lastName: "Brown",
		firstName: "Steven",
		age: 38,
	},
	{
		id: 39,
		lastName: "Anderson",
		firstName: "Dorothy",
		age: 24,
	},
	{
		id: 40,
		lastName: "Clark",
		firstName: "Paul",
		age: 41,
	},
	{
		id: 41,
		lastName: "Young",
		firstName: "Elizabeth",
		age: 22,
	},
	{
		id: 42,
		lastName: "Harris",
		firstName: "George",
		age: 30,
	},
	{
		id: 43,
		lastName: "Johnson",
		firstName: "Karen",
		age: 27,
	},
	{
		id: 44,
		lastName: "Wilson",
		firstName: "Edward",
		age: 34,
	},
	{
		id: 45,
		lastName: "Turner",
		firstName: "Mary",
		age: 35,
	},
	{
		id: 46,
		lastName: "Miller",
		firstName: "William",
		age: 28,
	},
	{
		id: 47,
		lastName: "Thomas",
		firstName: "Sandra",
		age: 36,
	},
	{
		id: 48,
		lastName: "White",
		firstName: "Brian",
		age: 23,
	},
	{
		id: 49,
		lastName: "Martin",
		firstName: "Laura",
		age: 32,
	},
	{
		id: 50,
		lastName: "Williams",
		firstName: "Kevin",
		age: 31,
	},
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const AdminUsersActive = () => {
	const navigate = useNavigate();

	const handleRowClick = (params) => {
		const { row } = params;
		navigate("/users/admin/123");
	};
	return (
		<DataGrid
			rows={rows}
			columns={columns}
			initialState={initialState}
			pageSizeOptions={[10, 25, 50]}
			className="custom-data-grid"
			onRowClick={handleRowClick}
		/>
	);
};

export default AdminUsersActive;
