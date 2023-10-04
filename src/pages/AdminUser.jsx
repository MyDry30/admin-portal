import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { MdArrowBack } from "react-icons/md";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";

const AdminUser = () => {
	const navigate = useNavigate();
	const { userId } = useParams();
	const [canEdit, setCanEdit] = useState(false);

	const handleBackClick = () => navigate(-1);

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
					<h2>Admin Users / Steve Lament</h2>
				</div>
			</ControlBar>
			<Container>
				{canEdit ? (
					<Modal>
						<div className="flex-column row-gap-2">
							<div className="flex-row justify-sb">
								<h2>About</h2>
								<div className="flex-row column-gap-05">
									<Button>Save</Button>
									<Button onClick={() => setCanEdit(false)}>
										Cancel
									</Button>
								</div>
							</div>
							<div className="flex-column row-gap-2"></div>
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
									<p className="small-text">First Name</p>
									<p>Steve</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Last Name</p>
									<p>Lament</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Email</p>
									<p>mbell@tepia.co</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Journey</p>
									<p>Moderation</p>
								</div>
								<div className="flex-column row-gap-05">
									<p className="small-text">Status</p>
									<p>Active</p>
								</div>
							</div>
						</div>
					</Modal>
				)}
			</Container>
		</>
	);
};

export default AdminUser;
