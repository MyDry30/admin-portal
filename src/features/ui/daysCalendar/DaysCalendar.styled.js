import styled from "styled-components";

export const StyledDaysChallenge = styled.section`
	margin-top: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 1.5rem;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid gray;
		padding: 1.5rem;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.25s ease-in-out;

		&:hover {
			box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.15);
		}

		svg {
			width: 20px;
			height: auto;
		}
	}
`;
