import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
		logOut(state, _action) {
			state.user = {};
		},
	},
});

export const { setUser, logOut } = authSlice.actions;

export const getUser = (state) => state.auth.user;

export default authSlice.reducer;
