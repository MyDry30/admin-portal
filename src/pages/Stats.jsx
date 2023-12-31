import { DatePicker } from "@mui/x-date-pickers";
import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import StatsModal from "../features/ui/statsModal/StatsModal";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Stats = () => {
	const [date, setDate] = useState({
		from: dayjs("01-01-2023"),
		to: dayjs(new Date()),
	});

	useEffect(() => {
		// const fromDate = date.from?.$d;
		// const toDate = date.to?.$d;
	}, [date]);

	return (
		<>
			<ControlBar>
				<div className="flex-column">
					<h2>Statistics</h2>
					<p className="supporting-text">User Statistics</p>
				</div>
				<Button>Export</Button>
			</ControlBar>
			<Container>
				<div className="flex-row justify-end column-gap-1 mb-1 color-green">
					<DatePicker
						label="From"
						value={date.from}
						onChange={(value) => setDate({ ...date, from: value })}
					/>
					<DatePicker
						label="To"
						value={date.to}
						onChange={(value) => setDate({ ...date, to: value })}
					/>
				</div>
				<div className="flex-row column-gap-3">
					<StatsModal
						title="User Statistics"
						rows={[
							{ key: "New Trial Users", value: 452 },
							{ key: "Current Trial User Count", value: 622 },
							{ key: "New Subscriptions", value: 783 },
							{ key: "Subscriptions Canceled", value: 22 },
							{
								key: "Current Active Subscriptions",
								value: 1032,
							},
							{ key: "Average Urge Count", value: 123 },
							{
								key: "Average Subscription Age",
								value: "35 days",
							},
						]}
					/>
					<StatsModal
						title="User Retention Rates"
						rows={[
							{ key: "Churn Rate", value: "5%" },
							{
								key: "Average App Usage Time",
								value: "7 minutes",
							},
							{
								key: "Average Time Per Task",
								value: "24 minutes",
							},
							{
								key: "Task Feedback Ratio",
								value: "65% positive",
							},
						]}
					/>
				</div>
			</Container>
		</>
	);
};

export default Stats;
