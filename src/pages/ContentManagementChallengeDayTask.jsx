import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { TextField } from "@mui/material";
import UploadButton from "../features/ui/uploadButton/UploadButton";

const ContentManagementChallengeDayTask = () => {
	const navigate = useNavigate();
	const { taskId } = useParams();
	const [canEdit, setCanEdit] = useState(false);

	const [taskType, setTaskType] = useState("Reading");
	const [title, setTitle] = useState("[Text]");
	const [description, setDescription] = useState("[Text]");
	const [timeToComplete, setTimeToComplete] = useState("10 Minutes");
	const [image, setImage] = useState("[Image]");

	const handleSaveButton = async () => {
		if (!taskType) {
			return alert("Task Type is required.");
		}
		if (!title) {
			return alert("Title is required.");
		}
		if (!description) {
			return alert("Description is required.");
		}
		console.log("save form here");
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
					<h2>Content Management/[Task #]</h2>
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
									<Button onClick={() => setCanEdit(false)}>
										Cancel
									</Button>
								</div>
							</div>
							<div
								className="flex-column row-gap-1"
								style={{ width: "400px" }}
							>
								<TextField
									label="Task Type"
									value={taskType}
									onChange={(e) =>
										setTaskType(e.target.value)
									}
								/>
								<TextField
									label="Title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
								<TextField
									label="Description"
									value={description}
									onChange={(e) =>
										setDescription(e.target.value)
									}
								/>
								<TextField
									label="Time Expected to Complete"
									value={timeToComplete}
									onChange={(e) =>
										setTimeToComplete(e.target.value)
									}
								/>
								<UploadButton text="Upload Image" />
							</div>
						</div>
					</Modal>
				) : (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>About</h2>
								<Button onClick={() => setCanEdit(true)}>
									Edit
								</Button>
							</div>
							<div className="flex-column row-gap-2">
								<div className="flex-column row-gap-05">
									<p className="small-text">Content Type</p>
									<p>Task</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Task Type</p>
									<p>{taskType}</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Title</p>
									<p>{title}</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Description</p>
									<p>{description}</p>
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
						</div>
					</Modal>
				)}
			</Container>
		</>
	);
};

export default ContentManagementChallengeDayTask;
