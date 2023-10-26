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

const ContentManagementDayAddTask = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();
	const { dayNumber } = useParams();

	const [taskType, setTaskType] = useState("");
	const [readingForm, setReadingForm] = useState({
		title: "",
		description: "",
		timeToComplete: "",
		content: "",
		image: "",
	});
	const [journalingForm, setJournalingForm] = useState({
		title: "",
		description: "",
		timeToComplete: "",
		content: "",
		image: "",
	});
	const [mediaForm, setMediaForm] = useState({
		title: "",
		description: "",
		duration: "",
		file: "",
		image: "",
	});
	const [questionForm, setQuestionForm] = useState({
		title: "",
		question: "",
		answerOption1: "",
		answerOption2: "",
		answerOption3: "",
		answerOption4: "",
		timeToComplete: "",
		duration: "",
	});

	const addTask = async () => {
		let body = {};
		try {
			if (!user.accessToken) {
				throw new Error("Unable to add task to day.");
			}

			if (taskType === "reading") {
				body = {
					type: "reading",
					title: readingForm.title,
					description: readingForm.description,
					content: readingForm.content,
					completionTime: readingForm.timeToComplete,
				};
			} else if (taskType === "journaling") {
				body = {
					type: "journaling",
					title: journalingForm.title,
					description: journalingForm.description,
					content: journalingForm.content,
					completionTime: journalingForm.timeToComplete,
				};
			} else if (taskType === "media") {
				body = {
					type: "media",
					title: mediaForm.title,
					description: mediaForm.description,
					duration: mediaForm.duration,
				};
			} else if (taskType === "questionnaire") {
				body = {
					type: "questionnaire",
					title: questionForm.title,
					description: questionForm.question,
					answers: [
						answerOption1,
						answerOption2,
						answerOption3,
						answerOption4,
					],
					completionTime: questionForm.timeToComplete,
					duration: questionForm.duration,
				};
			} else {
				console.error(`Unknown task type: ${taskType}`);
				return;
			}

			console.log(body);
			const response = await addTaskByDay(
				user.accessToken,
				dayNumber,
				body
			);
			console.log(response.body);
		} catch (err) {
			console.warn(err.message);
		}
	};
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
									/>
								</>
							)}
							{taskType === "journaling" && (
								<>
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
									/>
								</>
							)}
							{taskType === "media" && (
								<>
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
									<UploadButton />
									<UploadButton
										icon={<MdImage />}
										text="Add an Image"
									/>
								</>
							)}
							{taskType === "questionnaire" && (
								<>
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
