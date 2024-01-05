import { MdArrowBack } from "react-icons/md";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { useNavigate } from "react-router-dom";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

const ContentManagementAddForum = () => {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [link, setLink] = useState("");
	const [status, setStatus] = useState("");

	const handleSaveButton = async () => {
		if (!title) return alert("Title is required.");
		if (!description) return alert("Description is required.");
		if (!link) return alert("Link is required.");
		if (!status) return alert("Active is required.");

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
					<h2>Content Management / Add New Forum</h2>
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
								label="Forum Title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<TextField
								label="Forum Description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
							<TextField
								label="Link"
								value={link}
								onChange={(e) => setLink(e.target.value)}
							/>
							<TextField
								select
								label="Status"
								value={status}
								onChange={(e) => setStatus(e.target.value)}
							>
								<MenuItem key={1} value={"active"}>
									Active
								</MenuItem>
								<MenuItem key={2} value={"disabled"}>
									Disabled
								</MenuItem>
							</TextField>
						</div>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default ContentManagementAddForum;
