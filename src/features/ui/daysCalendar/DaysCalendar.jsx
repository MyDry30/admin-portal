import { MdArrowRight } from "react-icons/md";
import { StyledDaysChallenge } from "./DaysCalendar.styled";
import { useEffect, useState } from "react";

const DaysCalendar = () => {
	const [days, setDays] = useState([]);

	const initializeDays = () => {
		const temp = [];
		for (let i = 1; i < 31; i++) {
			temp.push(i);
		}
		return temp;
	};

	useEffect(() => {
		const tempDays = initializeDays();
		setDays(tempDays);
	}, []);

	return (
		<StyledDaysChallenge>
			{days?.map((day, index) => (
				<div key={index}>
					<p>{`Day ${day}`}</p>
					<MdArrowRight />
				</div>
			))}
		</StyledDaysChallenge>
	);
};

export default DaysCalendar;
