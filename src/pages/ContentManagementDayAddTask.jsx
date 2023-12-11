import { MdArrowBack, MdImage } from "react-icons/md";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import Container from "../features/ui/container/Container";
import UploadButton from "../features/ui/uploadButton/UploadButton";
import addTaskByDay from "../features/api/days/addTaskByDay";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import uploadAsset from "../features/api/s3/uploadAsset";

const ContentManagementDayAddTask = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const { dayNumber } = useParams();

	const [imageFile, setImageFile] = useState(null);
	const [mediaFile, setMediaFile] = useState(null);

	const handleUpload = async (file) => {
		try {
			const response = await uploadAsset(user.accessToken, file);
			return response;
		} catch (error) {
			console.error("Error uploading file:", error);
		}
	};

	const [taskType, setTaskType] = useState("");
	const [readingForm, setReadingForm] = useState({
		language: "English",
		title: "",
		description: "",
		timeToComplete: "",
		content: "",
		image: "",
	});
	const [journalingForm, setJournalingForm] = useState({
		language: "English",
		title: "",
		description: "",
		timeToComplete: "",
		content: "",
		image: "",
	});
	const [mediaForm, setMediaForm] = useState({
		language: "English",
		title: "",
		description: "",
		duration: "",
		file: "",
		image: "",
	});
	const [questionForm, setQuestionForm] = useState({
		language: "English",
		title: "",
		question: "",
		answerOption1: "",
		answerOption2: "",
		answerOption3: "",
		answerOption4: "",
		timeToComplete: "",
		duration: "",
	});

	const resetForm = () => {
		setTaskType("");
		setReadingForm({
			title: "",
			description: "",
			timeToComplete: "",
			content: "",
			image: "",
		});
		setJournalingForm({
			title: "",
			description: "",
			timeToComplete: "",
			content: "",
			image: "",
		});
		setMediaForm({
			title: "",
			description: "",
			duration: "",
			file: "",
			image: "",
		});
		setQuestionForm({
			title: "",
			question: "",
			answerOption1: "",
			answerOption2: "",
			answerOption3: "",
			answerOption4: "",
			timeToComplete: "",
			duration: "",
		});
	};

	const addTask = async () => {
		let body = {};
		try {
			if (!user.accessToken) {
				throw new Error("Unable to add task to day.");
			}

			if (taskType === "reading") {
				if (!readingForm.title) {
					return alert("Error: Title is required.");
				}
				if (!readingForm.description) {
					return alert("Error: Description is required.");
				}
				if (!readingForm.content) {
					return alert("Error: Content is required.");
				}
				if (!readingForm.timeToComplete) {
					return alert("Error: Time to Complete is required.");
				}
				body = {
					language: readingForm.language || "English",
					type: "reading",
					title: readingForm.title,
					description: readingForm.description,
					content: readingForm.content,
					completionTime: readingForm.timeToComplete,
				};
			} else if (taskType === "journaling") {
				if (!journalingForm.title) {
					return alert("Error: Title is required.");
				}
				if (!journalingForm.description) {
					return alert("Error: Description is required.");
				}
				if (!journalingForm.content) {
					return alert("Error: Content is required.");
				}
				if (!journalingForm.timeToComplete) {
					return alert("Error: Time to Complete is required.");
				}
				body = {
					language: journalingForm.language || "English",
					type: "journaling",
					title: journalingForm.title,
					description: journalingForm.description,
					content: journalingForm.content,
					completionTime: journalingForm.timeToComplete,
				};
			} else if (taskType === "media") {
				if (!mediaForm.title) {
					return alert("Error: Title is required.");
				}
				if (!mediaForm.description) {
					return alert("Error: Description is required.");
				}
				if (!mediaForm.duration) {
					return alert("Error: Duration is required.");
				}
				body = {
					language: mediaForm.language || "English",
					type: "media",
					title: mediaForm.title,
					description: mediaForm.description,
					duration: mediaForm.duration,
				};
			} else if (taskType === "questionnaire") {
				if (!questionForm.title) {
					return alert("Error: Title is required.");
				}
				if (!questionForm.question) {
					return alert("Error: Description is required.");
				}
				if (!questionForm.answerOption1) {
					return alert("Error: Answer Option 1 is required.");
				}
				if (!questionForm.answerOption2) {
					return alert("Error: Answer Option 2 is required.");
				}
				if (!questionForm.answerOption3) {
					return alert("Error: Answer Option 3 is required.");
				}
				if (!questionForm.answerOption4) {
					return alert("Error: Answer Option 4 is required.");
				}
				if (!questionForm.timeToComplete) {
					return alert("Error: Time to Complete is required.");
				}
				if (!questionForm.duration) {
					return alert("Error: Duration is required.");
				}
				body = {
					language: questionForm.language || "English",
					type: "questionnaire",
					title: questionForm.title,
					description: questionForm.question,
					answers: [
						questionForm.answerOption1,
						questionForm.answerOption2,
						questionForm.answerOption3,
						questionForm.answerOption4,
					],
					completionTime: questionForm.timeToComplete,
					duration: questionForm.duration,
				};
			} else {
				console.error(`Unknown task type: ${taskType}`);
				return;
			}

			if (imageFile) {
				const response = await handleUpload(imageFile);
				body.image = response.data;
			}
			if (mediaFile) {
				const response = await handleUpload(mediaFile);
				body.file = response.data;
			}

			await addTaskByDay(user.accessToken, dayNumber, body);
			alert("Task has been added.");
			resetForm();
		} catch (err) {
			console.warn(err.message);
			resetForm();
		}
	};

	const handleTaskTypeChange = (e) => {
		resetForm();
		setTaskType(e.target.value);
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
					<h2>Content Management / Add Task for Day {dayNumber}</h2>
				</div>
			</ControlBar>
			<Container>
				<Modal>
					<div className="flex-column row-gap-1">
						<div className="flex-row align-center justify-sb">
							<h2>New Task</h2>
							<div className="flex-row column-gap-05">
								{taskType && (
									<Button onClick={resetForm}>Cancel</Button>
								)}
								<Button onClick={addTask} type="filled">
									Add
								</Button>
							</div>
						</div>
						<div
							className="flex-column row-gap-1"
							style={{ width: "400px" }}
						>
							<TextField
								select
								label="Task Type"
								value={taskType}
								onChange={handleTaskTypeChange}
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
							{taskType === "reading" && (
								<>
									<TextField
										select
										label="Language"
										value={readingForm.language || ""}
										onChange={(e) =>
											setReadingForm({
												...readingForm,
												language: e.target.value,
											})
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
										value={readingForm.title}
										onChange={(e) =>
											setReadingForm({
												...readingForm,
												title: e.target.value,
											})
										}
									/>
									<TextField
										label="Description"
										value={readingForm.description}
										onChange={(e) =>
											setReadingForm({
												...readingForm,
												description: e.target.value,
											})
										}
									/>
									<TextField
										label="Content"
										multiline
										value={readingForm.content}
										onChange={(e) =>
											setReadingForm({
												...readingForm,
												content: e.target.value,
											})
										}
									/>
									<TextField
										label="Time Expected to Complete"
										value={readingForm.timeToComplete}
										onChange={(e) =>
											setReadingForm({
												...readingForm,
												timeToComplete: e.target.value,
											})
										}
									/>
									<UploadButton
										text="Add an Image"
										icon={<MdImage />}
										setSelectedFile={setImageFile}
									/>
								</>
							)}
							{taskType === "journaling" && (
								<>
									<TextField
										select
										label="Language"
										value={journalingForm.language || ""}
										onChange={(e) =>
											setJournalingForm({
												...journalingForm,
												language: e.target.value,
											})
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
										value={journalingForm.title}
										onChange={(e) =>
											setJournalingForm({
												...journalingForm,
												title: e.target.value,
											})
										}
									/>
									<TextField
										label="Description"
										value={journalingForm.description}
										onChange={(e) =>
											setJournalingForm({
												...journalingForm,
												description: e.target.value,
											})
										}
									/>
									<TextField
										label="Content"
										multiline
										value={journalingForm.content}
										onChange={(e) =>
											setJournalingForm({
												...journalingForm,
												content: e.target.value,
											})
										}
									/>
									<TextField
										label="Time Expected to Complete"
										value={journalingForm.timeToComplete}
										onChange={(e) =>
											setJournalingForm({
												...journalingForm,
												timeToComplete: e.target.value,
											})
										}
									/>
									<UploadButton
										icon={<MdImage />}
										text="Add an Image"
										setSelectedFile={setImageFile}
									/>
								</>
							)}
							{taskType === "media" && (
								<>
									<TextField
										select
										label="Language"
										value={mediaForm.language || ""}
										onChange={(e) =>
											setMediaForm({
												...mediaForm,
												language: e.target.value,
											})
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
										value={mediaForm.title}
										onChange={(e) =>
											setMediaForm({
												...mediaForm,
												title: e.target.value,
											})
										}
									/>
									<TextField
										label="Description"
										value={mediaForm.description}
										onChange={(e) =>
											setMediaForm({
												...mediaForm,
												description: e.target.value,
											})
										}
									/>
									<TextField
										label="Duration"
										value={mediaForm.duration}
										onChange={(e) =>
											setMediaForm({
												...mediaForm,
												duration: e.target.value,
											})
										}
									/>
									<UploadButton
										setSelectedFile={setMediaFile}
									/>
									<UploadButton
										icon={<MdImage />}
										text="Add an Image"
										setSelectedFile={setImageFile}
									/>
								</>
							)}
							{taskType === "questionnaire" && (
								<>
									<TextField
										select
										label="Language"
										value={questionForm.language || ""}
										onChange={(e) =>
											setQuestionForm({
												...questionForm,
												language: e.target.value,
											})
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
										value={questionForm.title}
										onChange={(e) =>
											setQuestionForm({
												...questionForm,
												title: e.target.value,
											})
										}
									/>
									<TextField
										label="Question"
										value={questionForm.question}
										onChange={(e) =>
											setQuestionForm({
												...questionForm,
												question: e.target.value,
											})
										}
									/>
									<TextField
										label="Answer Option 1"
										value={questionForm.answerOption1}
										onChange={(e) =>
											setQuestionForm({
												...questionForm,
												answerOption1: e.target.value,
											})
										}
									/>
									<TextField
										label="Answer Option 2"
										value={questionForm.answerOption2}
										onChange={(e) =>
											setQuestionForm({
												...questionForm,
												answerOption2: e.target.value,
											})
										}
									/>
									<TextField
										label="Answer Option 3"
										value={questionForm.answerOption3}
										onChange={(e) =>
											setQuestionForm({
												...questionForm,
												answerOption3: e.target.value,
											})
										}
									/>
									<TextField
										label="Answer Option 4"
										value={questionForm.answerOption4}
										onChange={(e) =>
											setQuestionForm({
												...questionForm,
												answerOption4: e.target.value,
											})
										}
									/>
									<TextField
										label="Time to Complete"
										value={questionForm.timeToComplete}
										onChange={(e) => {
											setQuestionForm({
												...questionForm,
												timeToComplete: e.target.value,
											});
										}}
									/>
									<TextField
										label="Duration"
										value={questionForm.duration}
										onChange={(e) => {
											setQuestionForm({
												...questionForm,
												duration: e.target.value,
											});
										}}
									/>
								</>
							)}
						</div>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default ContentManagementDayAddTask;
