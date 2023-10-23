import { MdArrowRight } from "react-icons/md";
import { StyledDaysChallenge } from "./DaysCalendar.styled";
import { useNavigate } from "react-router-dom";

const DaysCalendar = ({ days }) => {
	const navigate = useNavigate();

	return (
		<StyledDaysChallenge>
			{days?.map((day) => (
				<div
					key={day._id}
					onClick={() => navigate(`/days/${day.number}`)}
				>
					<p>{`${day?.text}`}</p>
					<MdArrowRight />
				</div>
			))}
		</StyledDaysChallenge>
	);
};

export default DaysCalendar;
