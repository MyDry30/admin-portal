import styled from "styled-components";

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
`;
