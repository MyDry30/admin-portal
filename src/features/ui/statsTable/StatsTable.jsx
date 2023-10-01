import { StyledStatsTable } from "./StatsTable.styled";

const StatsTable = ({ rows }) => {
	return (
		<StyledStatsTable>
			{rows?.map((row, index) => (
				<div className="stats-table-row" key={index}>
					<p>{row.key}</p>
					<p>{row.value}</p>
				</div>
			))}
		</StyledStatsTable>
	);
};

export default StatsTable;
