import { useEffect, useRef, useState } from "react";
import DaysCalendar from "../features/ui/daysCalendar/DaysCalendar";
import SearchInput from "../features/ui/searchInput/SearchInput";
import { MdSearch } from "react-icons/md";
import SubNav from "../features/ui/subNav/SubNav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../features/app/authSlice";
import getDays from "../features/api/getDays";

const ContentManagementChallenge = () => {
	const searchRef = useRef("");
	const user = useSelector(getUser);
	const [days, setDays] = useState(null);

	const populateDate = async (accessToken) => {
		try {
			const response = await getDays(accessToken);
			setDays(response.data.filter((day) => day.number <= 30));
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (user.accessToken) {
			populateDate(user.accessToken);
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
			</div>
			<SubNav>
				<NavLink to="/content-management/30-day-challenge">
					30 Day Challenge
				</NavLink>
				<NavLink to="/content-management/coaches">Coaches</NavLink>
				<NavLink to="/content-management/toolkit">Toolkit</NavLink>
			</SubNav>
			{days ? <DaysCalendar days={days} /> : <h2>Loading...</h2>}
		</>
	);
};

export default ContentManagementChallenge;
