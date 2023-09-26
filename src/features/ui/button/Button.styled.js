import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: var(--primary-green);
	width: min-content;
	white-space: nowrap;
	color: white;
	font-size: 14px;
	padding: 0.75rem 1.25rem;
	letter-spacing: 0.1px;
	border-radius: 50px;
	border: none;
	font-size: 14px;
	transition: all 0.25s ease-in-out;

	&:hover {
		cursor: pointer;
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
	}

	&:active,
	&:focus {
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
		outline: 1px solid var(--primary-green);
	}
`;
