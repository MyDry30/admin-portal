import styled from "styled-components";

export const StyledStatsTable = styled.div`
	width: 100%;

	.stats-table-row {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex: 1;
		padding: 0.75rem 0;
		border-bottom: 1px solid black;
		margin-bottom: 0.5rem;

		p {
			width: 100%;
		}
	}
`;
