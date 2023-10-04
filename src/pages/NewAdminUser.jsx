import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";

const NewAdminUser = () => {
	const navigate = useNavigate();
	const { userId } = useParams();
	const [canEdit, setCanEdit] = useState(false);

	const handleBackClick = () => navigate(-1);

	const handleAddClick = async () => {
		console.log("handle add click here");
	};

	return (
		<>
			<ControlBar>
				<div className="flex-row align-center column-gap-1">
					<MdArrowBack
						onClick={handleBackClick}
						style={{
							width: "32px",
							height: "32px",
							cursor: "pointer",
						}}
					/>
					<h2>Admin Users / New User</h2>
				</div>
			</ControlBar>
			<Container>
				<Modal>
					<div className="flex-column row-gap-2">
						<div className="flex-row justify-sb">
							<h2>New User</h2>
							<Button type="filled" onClick={handleAddClick}>
								Add
							</Button>
						</div>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default NewAdminUser;
