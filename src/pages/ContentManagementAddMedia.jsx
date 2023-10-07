import { MdArrowBack } from "react-icons/md";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { useNavigate } from "react-router-dom";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

const ContentManagementAddMedia = () => {
	const navigate = useNavigate();

	const [type, setType] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [duration, setDuration] = useState("");

	const handleSaveButton = async () => {
		if (!type) return alert("Type is required.");
		if (!title) return alert("Title is required.");
		if (!description) return alert("Description is required.");
		if (!duration) return alert("Duration is required.");

		console.log("save form here");
	};

	return (
		<>
			<ControlBar>
				<div className="flex-row justify-sb column-gap-1">
					<MdArrowBack
						onClick={() => navigate(-1)}
						style={{
							width: "32px",
							height: "32px",
							cursor: "pointer",
						}}
					/>
					<h2>Content Management / Add New Media</h2>
				</div>
			</ControlBar>
			<Container>
				<Modal>
					<div className="flex-column row-gap-2">
						<div className="flex-row justify-sb">
							<h2>About</h2>
							<Button type="filled" onClick={handleSaveButton}>
								Add
							</Button>
						</div>
						<div
							className="flex-column row-gap-1"
							style={{ width: "400px" }}
						>
							<TextField
								select
								label="Media Type"
								value={type}
								onChange={(e) => setType(e.target.value)}
							>
								<MenuItem key={1} value={"video"}>
									Video
								</MenuItem>
								<MenuItem key={2} value={"audio"}>
									Audio
								</MenuItem>
							</TextField>
							<TextField
								label="Title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<TextField
								label="Description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
							<TextField
								label="Duration"
								value={duration}
								onChange={(e) => setDuration(e.target.value)}
							/>
						</div>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default ContentManagementAddMedia;
