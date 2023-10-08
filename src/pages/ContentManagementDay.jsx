import { MdArrowBack } from "react-icons/md";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const ContentManagementDay = () => {
	const { dayId } = useParams();
	const navigate = useNavigate();

	const [canEditText, setCanEditText] = useState(false);
	const [canEditQuote, setCanEditQuote] = useState(false);
	const [canEditTask, setCanEditTask] = useState(false);

	const [textContent, setTextContent] = useState("[Text]");

	const [quoteTitle, setQuoteTitle] = useState("[Text]");
	const [quoteContent, setQuoteContent] = useState("[Text]");
	const [quoteAuthor, setQuoteAuthor] = useState("[Text]");

	const [taskType, setTaskType] = useState("reading");

	const handleSaveText = async () => {
		console.log("save text form here");
	};
	const handleSaveQuote = async () => {
		console.log("save quote form here");
	};
	const handleSaveTask = async () => {
		console.log("save task for here");
	};

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
					<h2>Content Management / Day 3</h2>
				</div>
			</ControlBar>
			<Container>
				{canEditText ? (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>Text of the Day</h2>
								<div className="flex-row column-gap-05">
									<Button onClick={handleSaveText}>
										Save
									</Button>
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
									<Button onClick={handleSaveQuote}>
										Save
									</Button>
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
								<p className="small-text">Quote Author</p>
								<p>{quoteAuthor}</p>
							</div>
						</div>
					</Modal>
				)}
				{canEditTask ? (
					<Modal></Modal>
				) : (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>Tasks for the Day</h2>
								<Button onClick={() => navigate("/days/add")}>
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
									onChange={(e) =>
										setTaskType(e.target.value)
									}
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
								<DataGrid
									rows={[]}
									columns={[]}
									initialState={{}}
								/>
							</div>
						</div>
					</Modal>
				)}
			</Container>
		</>
	);
};

export default ContentManagementDay;
