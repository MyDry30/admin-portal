import { StyledStatsModal } from "./StatsModal.styled";
import Modal from "../modal/Modal";
import StatsTable from "../statsTable/StatsTable";

const StatsModal = ({ title, rows }) => {
	return (
		<StyledStatsModal>
			<Modal>
				<p className="bold-text stats-title">{title}</p>
				<StatsTable rows={rows}></StatsTable>
			</Modal>
		</StyledStatsModal>
	);
};

export default StatsModal;
