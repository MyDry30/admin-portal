import styled from "styled-components";

export const StyledSearchInput = styled.div`
	width: 250px;

	input {
		width: 100%;
		font-size: 1rem;
		padding: 0.5rem;
		padding-right: 2rem;
		outline: none;
		border: 1px solid black;
		border-radius: 3px;

		&:disabled {
			cursor: not-allowed;
		}
	}

	svg {
		position: absolute;
		top: 8px;
		right: 8px;
		width: 24px;
		height: 24px;
	}
`;
