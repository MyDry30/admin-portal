import styled from "styled-components";

export const StyledSubNav = styled.div`
	display: flex;
	flex-direction: row;
	width: min-content;

	a {
		white-space: nowrap;
		padding: 0.5rem 3rem;
		display: block;
		text-decoration: none;
		color: var(--text-inactive);
		border-bottom: 1px solid var(--text-inactive);

		&.active {
			color: var(--primary-green);
			border-color: var(--primary-green);
		}
	}
`;
