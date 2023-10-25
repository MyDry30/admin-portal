import { MdArrowBack } from "react-icons/md";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import getDayByNumber from "../features/api/days/getDayByNumber";
import editDay from "../features/api/days/editDay";

const columns = [
	{ field: "title", headerName: "Title", width: 250 },
	{ field: "description", headerName: "Description", width: 500 },
];
const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const ContentManagementDay = () => {
	const user = useSelector(getUser);
	const { dayNumber } = useParams();

	const navigate = useNavigate();

	const [day, setDay] = useState(null);

	const [canEditText, setCanEditText] = useState(false);
	const [canEditQuote, setCanEditQuote] = useState(false);

	const [textContent, setTextContent] = useState("");

	const [quoteTitle, setQuoteTitle] = useState("");
	const [quoteContent, setQuoteContent] = useState("");
	const [quoteAuthor, setQuoteAuthor] = useState("");

	const [tasks, setTasks] = useState([]);
	const [filteredTasks, setFilteredTasks] = useState([]);
	const [taskType, setTaskType] = useState("reading");

	const fetchDayByNumber = async (accessToken) => {
		try {
			const response = await getDayByNumber(accessToken, dayNumber);
			const dayData = response.data;

			const { quote } = dayData;
			setQuoteTitle(quote.title);
			setQuoteContent(quote.content);
			setQuoteAuthor(quote.author);

			const { tasks } = dayData;
			setTasks(tasks);
			setFilteredTasks(tasks.filter((task) => task.type === taskType));

			setDay(dayData);
			setTextContent(dayData.text);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (user.accessToken) {
			fetchDayByNumber(user.accessToken);
		}
	}, [user]);

	useEffect(() => {
		setFilteredTasks(tasks.filter((task) => task.type === taskType));
	}, [taskType]);

	const handleRowClick = (params) => {
		const { row } = params;
		navigate(`/days/tasks/12345`);
	};

	const handleSaveText = async () => {
		try {
			await editDay(user.accessToken, day._id, {
				text: textContent,
			});
		} catch (err) {
			console.warn(err.message);
		} finally {
			setCanEditText(false);
		}
	};

	const handleSaveQuote = async () => {
		try {
			await editDay(user.accessToken, day._id, {
				quote: {
					title: quoteTitle,
					content: quoteContent,
					author: quoteAuthor,
				},
			});
		} catch (err) {
			console.warn(err.message);
		} finally {
			setCanEditQuote(false);
		}
	};

	const handleSaveTask = async () => {
		console.log("save task for here");
	};

	if (!day) {
		return (
			<Container>
				<h2>Loading...</h2>
			</Container>
		);
	}

	return (
		<>
			<ControlBar>
				<div className="flex-row align-center column-gap-1">
					<MdArrowBack
						onClick={() => navigate(-1)}
						style={{
							width: "32px",
							height: "32px",
							cursor: "pointer",
						}}
					/>
					<h2>Content Management / Day {day.number}</h2>
				</div>
			</ControlBar>
			<Container>
				{canEditText ? (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>Text of the Day</h2>
								<div className="flex-row column-gap-05">
									{day && user?.accessToken && (
										<Button onClick={handleSaveText}>
											Save
										</Button>
									)}
									<Button
										onClick={() => setCanEditText(false)}
									>
										Cancel
									</Button>
								</div>
							</div>
							<div
								className="flex-column row-gap-1"
								style={{ width: "400px" }}
							>
								<TextField
									label="Content"
									value={textContent}
									onChange={(e) =>
										setTextContent(e.target.value)
									}
								/>
							</div>
						</div>
					</Modal>
				) : (
					<Modal>
						<div className="flex-column row-gap-1">
							<div className="flex-row justify-sb">
								<h2>Text of the Day</h2>
								<Button onClick={() => setCanEditText(true)}>
									Edit
								</Button>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Content</p>
								<p>{textContent}</p>
							</div>
						</div>
					</Modal>
				)}
				{canEditQuote ? (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>Daily Quote</h2>
								<div className="flex-row column-gap-05">
									{day && user?.accessToken && (
										<Button onClick={handleSaveQuote}>
											Save
										</Button>
									)}
									<Button
										onClick={() => setCanEditQuote(false)}
									>
										Cancel
									</Button>
								</div>
							</div>
							<div
								className="flex-column row-gap-1"
								style={{ width: "400px" }}
							>
								<TextField
									label="Quote Title"
									value={quoteTitle}
									onChange={(e) =>
										setQuoteTitle(e.target.value)
									}
								/>
								<TextField
									label="Quote Content"
									value={quoteContent}
									onChange={(e) =>
										setQuoteContent(e.target.value)
									}
								/>
								<TextField
									label="Quote Author"
									value={quoteAuthor}
									onChange={(e) =>
										setQuoteAuthor(e.target.value)
									}
								/>
							</div>
						</div>
					</Modal>
				) : (
					<Modal>
						<div className="flex-column row-gap-1">
							<div className="flex-row justify-sb">
								<h2>Daily Quote</h2>
								<Button onClick={() => setCanEditQuote(true)}>
									Edit
								</Button>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Title</p>
								<p>{quoteTitle}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Content</p>
								<p>{quoteContent}</p>
							</div>
							<div className="flex-column row-gap-05">
								<p className="small-text">Author</p>
								<p>{quoteAuthor}</p>
							</div>
						</div>
					</Modal>
				)}
				<Modal>
					<div className="flex-column row-gap-2">
						<div className="flex-row justify-sb">
							<h2>Tasks for the Day</h2>
							<Button
								onClick={() =>
									navigate(`/days/${day.number}/tasks/add`)
								}
							>
								Add a Task
							</Button>
						</div>
						<div
							className="flex-column row-gap-2"
							style={{ width: "400px" }}
						>
							<TextField
								select
								label="Task Type"
								value={taskType}
								onChange={(e) => setTaskType(e.target.value)}
							>
								<MenuItem key={1} value={"reading"}>
									Reading
								</MenuItem>
								<MenuItem key={2} value={"journaling"}>
									Journaling
								</MenuItem>
								<MenuItem key={3} value={"media"}>
									Media
								</MenuItem>
								<MenuItem key={4} value={"questionnaire"}>
									Questionnaire
								</MenuItem>
							</TextField>
						</div>
						<DataGrid
							rows={filteredTasks}
							columns={columns}
							initialState={initialState}
							pageSizeOptions={[10, 25, 50]}
							className="custom-data-grid"
							onRowClick={handleRowClick}
							getRowId={(row) => row["_id"]}
						/>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default ContentManagementDay;
