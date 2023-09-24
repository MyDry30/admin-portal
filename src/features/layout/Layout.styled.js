import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: var(--primary-green);
	padding: 0.75rem 1.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	.headerLogo {
		display: block;
		width: min-content;
		font-size: 1.5rem;
		text-decoration: none;
		color: white;
	}

	.headerLogin {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		column-gap: 0.75rem;
		padding: 0.5rem;
		border: 1px solid white;
		border-radius: 5px;
		color: white;
		cursor: pointer;

		p {
			font-size: 1.25rem;
		}

		svg {
			width: 18px;
			height: 18px;
		}
	}
`;

export const StyledBody = styled.main`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: top;
`;

export const StyledNav = styled.nav`
	background-color: #e0e7e9;
	width: 260px;
	height: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 0.5rem;
		text-decoration: none;
		color: var(--text-gray);
		border-radius: 50px;
		padding: 1rem;
		transition: all 0.25s ease-in-out;

		&.active {
			background-color: var(--primary-green-30);
		}

		&:hover {
			background-color: var(--primary-green-30);
		}
	}
`;
