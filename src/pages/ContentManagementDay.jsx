import { MdArrowBack } from "react-icons/md";
import ControlBar from "../features/ui/controlBar/ControlBar";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../features/ui/container/Container";
import Modal from "../features/ui/modal/Modal";
import Button from "../features/ui/button/Button";

const ContentManagementDay = () => {
	const { dayId } = useParams();
	const navigate = useNavigate();

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
				<Modal>
					<div className="flex-column row-gap-1">
						<div className="flex-row justify-sb">
							<h2>Text of the Day</h2>
							<Button>Edit</Button>
						</div>
						<div className="flex-column row-gap-05">
							<p className="small-text">Content</p>
							<p>[Text]</p>
						</div>
					</div>
				</Modal>
				<Modal>
					<div className="flex-column row-gap-1">
						<div className="flex-row justify-sb">
							<h2>Daily Quote</h2>
							<Button>Edit</Button>
						</div>
						<div className="flex-column row-gap-05">
							<p className="small-text">Title</p>
							<p>[Text]</p>
						</div>
						<div className="flex-column row-gap-05">
							<p className="small-text">Content</p>
							<p>[Text]</p>
						</div>
						<div className="flex-column row-gap-05">
							<p className="small-text">Quote Author</p>
							<p>[Text]</p>
						</div>
					</div>
				</Modal>
				<Modal>
					<div className="flex-column row-gap-3">
						<div className="flex-row justify-sb">
							<h2>Tasks for the Day</h2>
							<Button onClick={() => navigate("/days/add")}>
								Add a Task
							</Button>
						</div>
						<div className="flex-column row-gap-05">
							<p className="small-text">Reading</p>
						</div>
						<div className="flex-column row-gap-05">
							<p className="small-text">Journaling</p>
						</div>
						<div className="flex-column row-gap-05">
							<p className="small-text">Media</p>
						</div>
						<div className="flex-column row-gap-05">
							<p className="small-text">Questionnaire</p>
						</div>
					</div>
				</Modal>
			</Container>
		</>
	);
};

export default ContentManagementDay;
