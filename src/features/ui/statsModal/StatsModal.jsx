import React from "react";
import { StyledStatsModal } from "./StatsModal.styled";
import Modal from "../modal/Modal";

const StatsModal = ({ title, rows }) => {
	return (
		<StyledStatsModal>
			<Modal>
				<p className="bold-text stats-title">{title}</p>
				<div className="stats-table">
					{rows.map((row, index) => (
						<div className="stats-table-row" key={index}>
							<p>{row.key}</p>
							<p>{row.value}</p>
						</div>
					))}
				</div>
			</Modal>
		</StyledStatsModal>
	);
};

export default StatsModal;
