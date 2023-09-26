import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../constants";

const initialState = {
	user: {},
	error: null,
};

export const handleLogin = createAsyncThunk(
	"auth/handleLogin",
	async (payload) => {
		const { email, password } = payload;
		try {
			const response = await axios.post(
				`${URL}/auth/login`,
				{
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);
			return response?.data;
		} catch (err) {
			throw new Error(err);
		}
	}
);

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
	extraReducers(builder) {
		builder
			.addCase(handleLogin.fulfilled, (state, action) => {
				state.user = action.payload;
			})
			.addCase(handleLogin.rejected, (state, action) => {
				state.error = action.payload;
			});
	},
});

export const { setUser, logOut } = authSlice.actions;

export const getUser = (state) => state.auth.user;

export default authSlice.reducer;
