import styled from "styled-components";

export const StyledUploadButton = styled.div`
	.MuiButtonBase-root {
		background: var(--primary-green);
		display: flex;
		width: min-content;
		white-space: nowrap;
		align-items: center;
		justify-content: center;

		&:hover {
			background: var(--primary-green);
		}
	}
	input[type="file"] {
		display: none;
	}
`;
