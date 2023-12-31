import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack, MdImage } from "react-icons/md";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { MenuItem, TextField } from "@mui/material";
import UploadButton from "../features/ui/uploadButton/UploadButton";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import getDayTask from "../features/api/days/tasks/getDayTask";
import updateDayTask from "../features/api/days/tasks/updateDayTask";
import deleteDayTask from "../features/api/days/tasks/deleteDayTask";

const ContentManagementChallengeDayTask = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const { dayNumber, taskId } = useParams();
	const [canEdit, setCanEdit] = useState(false);

	const [task, setTask] = useState(null);

	const [language, setLanguage] = useState("");
	const [taskType, setTaskType] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");
	const [timeToComplete, setTimeToComplete] = useState("");
	const [duration, setDuration] = useState("");
	const [image, setImage] = useState("");
	const [file, setFile] = useState("");
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [option4, setOption4] = useState("");

	const fetchTask = async (accessToken) => {
		try {
			const response = await getDayTask(accessToken, dayNumber, taskId);

			const taskData = response.data;
			setTask(taskData);

			if (taskData.type === "reading" || taskData.type === "journaling") {
				setLanguage(taskData.language);
				setTaskType(taskData.type);
				setTitle(taskData.title);
				setDescription(taskData.description);
				setContent(taskData.content);
				setTimeToComplete(taskData.completionTime);
				setImage("");
			}
			if (taskData.type === "media") {
				setLanguage(taskData.language);
				setTaskType(taskData.type);
				setTitle(taskData.title);
				setDescription(taskData.description);
				setTimeToComplete(taskData.completionTime);
				setDuration(taskData.duration);
				setImage("");
				setFile("");
			}
			if (taskData.type === "questionnaire") {
				setLanguage(taskData.language);
				setTaskType(taskData.type);
				setTitle(taskData.title);
				setDescription(taskData.description);
				setTimeToComplete(taskData.completionTime);
				setDuration(taskData.duration);
				setOption1(taskData.answers[0]);
				setOption2(taskData.answers[1]);
				setOption3(taskData.answers[2]);
				setOption4(taskData.answers[3]);
			}
		} catch (err) {
			console.warn(err.message);
		}
	};

	useEffect(() => {
		if (user?.accessToken) {
			fetchTask(user.accessToken);
		}
	}, [user]);

	const resetForm = () => {
		setCanEdit(false);
		fetchTask(user.accessToken);
	};

	const handleSaveButton = async () => {
		let body = {};
		if (taskType === "reading") {
			body = {
				language,
				type: taskType,
				title,
				description,
				content,
				completionTime: timeToComplete,
			};
		} else if (taskType === "journaling") {
			body = {
				language,
				type: taskType,
				title,
				description,
				content,
				completionTime: timeToComplete,
			};
		} else if (taskType === "media") {
			body = {
				language,
				type: taskType,
				title,
				description,
				duration,
			};
		} else if (taskType === "questionnaire") {
			body = {
				language,
				type: taskType,
				title,
				description,
				answers: [option1, option2, option3, option4],
				completionTime: timeToComplete,
				duration,
			};
		} else {
			console.warn(`Unknown task type: ${taskType}`);
			return;
		}

		try {
			await updateDayTask(user.accessToken, dayNumber, taskId, body);
		} catch (err) {
			console.warn(err.message);
		} finally {
			resetForm();
		}
	};

	const handleDelete = async () => {
		try {
			if (confirm("Are you sure you want to delete this item?")) {
				await deleteDayTask(user.accessToken, dayNumber, taskId);
				alert(
					`Task has been deleted. Redirecting to day ${dayNumber}...`
				);
				navigate(-1);
			}
		} catch (err) {
			console.warn(err.message);
		}
	};

	if (!task) {
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
					<h2>Content Management / Task</h2>
				</div>
			</ControlBar>
			<Container>
				{canEdit ? (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>About</h2>
								<div className="flex-row column-gap-05">
									<Button onClick={handleSaveButton}>
										Save
									</Button>
									<Button onClick={resetForm}>Cancel</Button>
								</div>
							</div>
							<>
								{taskType === "reading" && (
									<div
										className="flex-column row-gap-1"
										style={{ width: "400px" }}
									>
										<TextField
											select
											label="Language"
											value={language || ""}
											onChange={(e) =>
												setLanguage(e.target.value)
											}
										>
											<MenuItem key={1} value="English">
												English
											</MenuItem>
											<MenuItem key={2} value="Spanish">
												Spanish
											</MenuItem>
										</TextField>
										<TextField
											label="Title"
											value={title}
											onChange={(e) =>
												setTitle(e.target.value)
											}
										/>
										<TextField
											label="Description"
											value={description}
											onChange={(e) =>
												setDescription(e.target.value)
											}
										/>
										<TextField
											label="Content"
											value={content}
											onChange={(e) =>
												setContent(e.target.value)
											}
											multiline
										/>
										<TextField
											label="Time Expected to Complete"
											value={timeToComplete}
											onChange={(e) =>
												setTimeToComplete(
													e.target.value
												)
											}
										/>
										<UploadButton text="Upload Image" />
									</div>
								)}
								{taskType === "journaling" && (
									<div
										className="flex-column row-gap-1"
										style={{ width: "400px" }}
									>
										<TextField
											select
											label="Language"
											value={language || ""}
											onChange={(e) =>
												setLanguage(e.target.value)
											}
										>
											<MenuItem key={1} value="English">
												English
											</MenuItem>
											<MenuItem key={2} value="Spanish">
												Spanish
											</MenuItem>
										</TextField>
										<TextField
											label="Title"
											value={title}
											onChange={(e) =>
												setTitle(e.target.value)
											}
										/>
										<TextField
											label="Description"
											value={description}
											onChange={(e) =>
												setDescription(e.target.value)
											}
										/>
										<TextField
											label="Content"
											value={content}
											onChange={(e) =>
												setContent(e.target.value)
											}
											multiline
										/>
										<TextField
											label="Time Expected to Complete"
											value={timeToComplete}
											onChange={(e) =>
												setTimeToComplete(
													e.target.value
												)
											}
										/>
										<UploadButton text="Upload Image" />
									</div>
								)}
								{taskType === "media" && (
									<div
										className="flex-column row-gap-1"
										style={{ width: "400px" }}
									>
										<TextField
											select
											label="Language"
											value={language || ""}
											onChange={(e) =>
												setLanguage(e.target.value)
											}
										>
											<MenuItem key={1} value="English">
												English
											</MenuItem>
											<MenuItem key={2} value="Spanish">
												Spanish
											</MenuItem>
										</TextField>
										<TextField
											label="Title"
											value={title}
											onChange={(e) =>
												setTitle(e.target.value)
											}
										/>
										<TextField
											label="Description"
											value={description}
											onChange={(e) =>
												setDescription(e.target.value)
											}
										/>
										<TextField
											label="Duration"
											value={duration}
											onChange={(e) =>
												setDuration(e.target.value)
											}
										/>
										<UploadButton
											icon={<MdImage />}
											text="Upload File"
										/>
										<UploadButton text="Upload Image" />
									</div>
								)}
								{taskType === "questionnaire" && (
									<div
										className="flex-column row-gap-1"
										style={{ width: "400px" }}
									>
										<TextField
											select
											label="Language"
											value={language || ""}
											onChange={(e) =>
												setLanguage(e.target.value)
											}
										>
											<MenuItem key={1} value="English">
												English
											</MenuItem>
											<MenuItem key={2} value="Spanish">
												Spanish
											</MenuItem>
										</TextField>
										<TextField
											label="Title"
											value={title}
											onChange={(e) =>
												setTitle(e.target.value)
											}
										/>
										<TextField
											label="Question"
											value={description}
											onChange={(e) =>
												setDescription(e.target.value)
											}
										/>
										<TextField
											label="Answer Option 1"
											value={option1}
											onChange={(e) =>
												setOption1(e.target.value)
											}
										/>
										<TextField
											label="Answer Option 2"
											value={option2}
											onChange={(e) =>
												setOption2(e.target.value)
											}
										/>
										<TextField
											label="Answer Option 3"
											value={option3}
											onChange={(e) =>
												setOption3(e.target.value)
											}
										/>
										<TextField
											label="Answer Option 4"
											value={option4}
											onChange={(e) =>
												setOption4(e.target.value)
											}
										/>
										<TextField
											label="Time Expected to Complete"
											value={timeToComplete}
											onChange={(e) =>
												setTimeToComplete(
													e.target.value
												)
											}
										/>
										<TextField
											label="Duration"
											value={duration}
											onChange={(e) =>
												setDuration(e.target.value)
											}
										/>
										<UploadButton text="Upload Image" />
									</div>
								)}
							</>
						</div>
					</Modal>
				) : (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>About</h2>
								<div className="flex-row column-gap-05">
									<Button onClick={() => setCanEdit(true)}>
										Edit
									</Button>
									<Button
										type="filled"
										onClick={handleDelete}
									>
										Delete
									</Button>
								</div>
							</div>
							<>
								{taskType === "reading" && (
									<div className="flex-column row-gap-2">
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Content Type
											</p>
											<p>Task</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Task Type
											</p>
											<p>{taskType}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Language
											</p>
											<p>{language}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">Title</p>
											<p>{title}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Description
											</p>
											<p>{description}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Content
											</p>
											<p>{content}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Time Expected to Complete
											</p>
											<p>{timeToComplete}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">Image</p>
											<p>{image}</p>
										</div>
									</div>
								)}
								{taskType === "journaling" && (
									<div className="flex-column row-gap-2">
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Content Type
											</p>
											<p>Task</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Task Type
											</p>
											<p>{taskType}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Language
											</p>
											<p>{language}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">Title</p>
											<p>{title}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Description
											</p>
											<p>{description}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Content
											</p>
											<p>{content}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Time Expected to Complete
											</p>
											<p>{timeToComplete}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">Image</p>
											<p>{image}</p>
										</div>
									</div>
								)}
								{taskType === "media" && (
									<div className="flex-column row-gap-2">
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Content Type
											</p>
											<p>Task</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Task Type
											</p>
											<p>{taskType}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Language
											</p>
											<p>{language}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">Title</p>
											<p>{title}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Description
											</p>
											<p>{description}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Duration
											</p>
											<p>{duration}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">File</p>
											<p>{file}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">Image</p>
											<p>{image}</p>
										</div>
									</div>
								)}
								{taskType === "questionnaire" && (
									<div className="flex-column row-gap-2">
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Content Type
											</p>
											<p>Task</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Task Type
											</p>
											<p>{taskType}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Language
											</p>
											<p>{language}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">Title</p>
											<p>{title}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Question
											</p>
											<p>{description}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Answer Option 1
											</p>
											<p>{option1}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Answer Option 2
											</p>
											<p>{option2}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Answer Option 3
											</p>
											<p>{option3}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Answer Option 4
											</p>
											<p>{option4}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Time Expected to Complete
											</p>
											<p>{timeToComplete}</p>
										</div>
										<div className="flex-column row-gap-05">
											<p className="small-text">
												Duration
											</p>
											<p>{duration}</p>
										</div>
									</div>
								)}
							</>
						</div>
					</Modal>
				)}
			</Container>
		</>
	);
};

export default ContentManagementChallengeDayTask;
