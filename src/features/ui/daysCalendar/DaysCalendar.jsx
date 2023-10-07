import { MdArrowRight } from "react-icons/md";
import { StyledDaysChallenge } from "./DaysCalendar.styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DaysCalendar = () => {
	const navigate = useNavigate();
	const [days, setDays] = useState([]);

	const initializeDays = () => {
		const temp = [];
		for (let i = 1; i < 31; i++) temp.push(i);
		return temp;
	};

	useEffect(() => {
		const tempDays = initializeDays();
		setDays(tempDays);
	}, []);

	return (
		<StyledDaysChallenge>
			{days?.map((day, index) => (
				<div key={index} onClick={() => navigate("/days/12345")}>
					<p>{`Day ${day}`}</p>
					<MdArrowRight />
				</div>
			))}
		</StyledDaysChallenge>
	);
};

export default DaysCalendar;
