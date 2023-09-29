import { DatePicker } from "@mui/x-date-pickers";
import Button from "../features/ui/button/Button";
import Container from "../features/ui/container/Container";
import ControlBar from "../features/ui/controlBar/ControlBar";
import StatsModal from "../features/ui/statsModal/StatsModal";
import { TextField } from "@mui/material";

const Stats = () => {
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
					<DatePicker label="From" />
					<DatePicker label="To" />
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
