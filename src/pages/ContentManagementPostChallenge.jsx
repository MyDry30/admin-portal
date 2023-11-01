import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import getDays from "../features/api/getDays";
import SearchInput from "../features/ui/searchInput/SearchInput";
import SubNav from "../features/ui/subNav/SubNav";
import { NavLink, useNavigate } from "react-router-dom";
import DaysCalendar from "../features/ui/daysCalendar/DaysCalendar";
import { MdSearch } from "react-icons/md";
import Button from "../features/ui/button/Button";

const DAYS_TO_SHOW = 30;

const ContentManagementPostChallenge = () => {
	const navigate = useNavigate();
	const searchRef = useRef("");
	const user = useSelector(getUser);
	const [days, setDays] = useState(null);
	const [startDay, setStartDay] = useState(31);

	const populateDates = async (accessToken) => {
		try {
			const response = await getDays(accessToken);
			setDays(response.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (user.accessToken) {
			populateDates(user.accessToken);
		}
	}, [user]);

	return (
		<>
			<div className="flex-row justify-sb">
				<SearchInput>
					<input
						ref={searchRef}
						type="text"
						placeholder="Search"
						disabled
					/>
					<MdSearch />
				</SearchInput>
				<Button onClick={() => navigate("/days/add")} type="filled">
					Add
				</Button>
			</div>
			<SubNav>
				<NavLink to="/content-management/30-day-challenge">
					30 Day Challenge
				</NavLink>
				<NavLink to="/content-management/post-challenge">
					Post Challenge
				</NavLink>
				<NavLink to="/content-management/coaches">Coaches</NavLink>
				<NavLink to="/content-management/toolkit">Toolkit</NavLink>
			</SubNav>
			{days ? (
				<DaysCalendar
					days={days.filter(
						(day) =>
							day.number >= startDay &&
							day.number < startDay + DAYS_TO_SHOW
					)}
				/>
			) : (
				<h2>Loading...</h2>
			)}
			<div className="flex-row justify-sb">
				{startDay > 31 ? (
					<Button
						onClick={() => setStartDay(startDay - DAYS_TO_SHOW)}
					>
						Previous 30 Days
					</Button>
				) : (
					<span></span>
				)}
				{startDay + DAYS_TO_SHOW <= days?.length ? (
					<Button
						onClick={() => setStartDay(startDay + DAYS_TO_SHOW)}
					>
						Next 30 Days
					</Button>
				) : (
					<span></span>
				)}
			</div>
		</>
	);
};

export default ContentManagementPostChallenge;
