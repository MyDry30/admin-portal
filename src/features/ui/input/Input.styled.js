import styled from "styled-components";

export const StyledInput = styled.div`
	position: relative;

	input {
		background: none;
		border: 1px solid #72777f;
		border-radius: 4px;
		width: 100%;
		color: black;
		font-size: 1rem;
		padding: 1rem 1rem 1rem 2.5rem;
		outline: none;

		&:active,
		&:focus {
			border: 1px solid var(--primary-green);
		}

		&::placeholder {
			color: var(--text-gray);
		}
	}

	svg {
		position: absolute;
		left: 0.5rem;
		top: 14px;
		width: 24px;
		height: 24px;
		color: var(--text-gray);
	}
`;
