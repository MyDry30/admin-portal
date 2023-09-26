import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: var(--primary-green);
	width: min-content;
	white-space: nowrap;
	color: white;
	font-size: 1rem;
	padding: 0.75rem 1.25rem;
	border-radius: 50px;
	border: none;
	font-size: 14px;

	&:hover {
		cursor: pointer;
	}
`;
