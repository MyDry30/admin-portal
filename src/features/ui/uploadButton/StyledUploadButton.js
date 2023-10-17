import styled from "styled-components";

export const StyledUploadButton = styled.div`
	.MuiButtonBase-root {
		border: 1px solid var(--text-inactive);
		background: none;
		box-shadow: none;
		color: var(--primary-green);
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0.75rem 1rem;
		text-transform: none;

		&:hover {
			background: var(--primary-green);
			border-color: var(--primary-green);
			color: white;
		}
	}
	input[type="file"] {
		display: none;
	}
`;
