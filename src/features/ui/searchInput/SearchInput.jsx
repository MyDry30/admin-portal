import React from "react";
import { StyledSearchInput } from "./SearchInput.styled";

const SearchInput = ({ children }) => {
	return <StyledSearchInput>{children}</StyledSearchInput>;
};

export default SearchInput;
