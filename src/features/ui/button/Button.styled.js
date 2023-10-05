import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledButton = styled.button`
	background: ${(props) =>
		props.type === "outline" ? "none" : "var(--primary-green)"};
	outline: none;
	border: ${(props) =>
		props.type === "outline" ? "1px solid black" : "none"};
	width: min-content;
	white-space: nowrap;
	color: ${(props) =>
		props.type === "outline" ? "var(--primary-green)" : "white"};
	font-size: 14px;
	padding: 0.75rem 1.5rem;
	letter-spacing: 0.1px;
	border-radius: 100px;
	font-size: 14px;
	transition: all 0.25s ease-in-out;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	&:disabled,
	&[disabled] {
		width: 100px !important;
		background: var(--text-inactive) !important;
		color: var(--text-gray) !important;
		border: none !important;
		cursor: not-allowed !important;
		box-shadow: none !important;
	}

	&:hover {
		cursor: pointer;
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
		background-color: ${(props) =>
			props.type === "outline" ? "var(--primary-green)" : "none"};
		color: white;
		border: ${(props) =>
			props.type === "outline"
				? "1px solid var(--primary-green)"
				: "none"};
	}

	&:active,
	&:focus {
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
	}

	svg {
		width: 1rem;
		height: 1rem;
		color: black;
		animation: ${rotate} 2s linear infinite;
	}
`;
