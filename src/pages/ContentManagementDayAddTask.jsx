import { MdArrowBack } from "react-icons/md";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { useNavigate } from "react-router-dom";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import Container from "../features/ui/container/Container";

const ContentManagementDayAddTask = () => {
	const navigate = useNavigate();

	const [taskType, setTaskType] = useState("");

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
					<h2>Content Management / Add Task for Day #</h2>
				</div>
			</ControlBar>
			<Container>
				<Modal>
					<div className="flex-column row-gap-1">
						<div className="flex-row align-center justify-sb">
							<h2>New Task</h2>
							<Button type="filled">Save</Button>
						</div>
						<div
							className="flex-column row-gap-1"
							style={{ width: "400px" }}
						>
							<TextField
								select
								label="Task Type"
								value={taskType}
								onChange={(e) => setTaskType(e.target.value)}
							>
								<MenuItem key={1} value={"Journaling"}>
									Journaling
								</MenuItem>
								<MenuItem key={2} value={"Media"}>
									Media
								</MenuItem>
								<MenuItem key={3} value={"Questionnaire"}>
									Questionnaire
								</MenuItem>
								<MenuItem key={4} value={"Reading"}>
									Reading
								</MenuItem>
							</TextField>
							{taskType === "Journaling" && (
								<h3>Journaling Form Here</h3>
							)}
							{taskType === "Media" && <h3>Media Form Here</h3>}
							{taskType === "Questionnaire" && (
								<h3>Questionnaire Form Here</h3>
							)}
							{taskType === "Reading" && (
								<h3>Reading Form Here</h3>
							)}
						</div>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default ContentManagementDayAddTask;
