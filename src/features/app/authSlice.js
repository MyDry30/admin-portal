import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../constants";

const initialState = {
	accessToken: null,
	email: null,
	role: null,
	status: null,
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
		logOut: (state, _action) => {
			state.accessToken = null;
			state.email = null;
			state.role = null;
			state.status = null;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(handleLogin.fulfilled, (state, action) => {
				state.accessToken = action.payload?.accessToken;
				state.email = action.payload?.email;
				state.role = action.payload?.role;
				state.status = action.payload?.status;
			})
			.addCase(handleLogin.rejected, (state, action) => {
				state.error = action.payload;
			});
	},
});

export const { logOut } = authSlice.actions;

export const getAccessToken = (state) => state.auth.accessToken;
export const getEmail = (state) => state.auth.email;
export const getRole = (state) => state.auth.role;
export const getState = (state) => state.auth.status;

export default authSlice.reducer;
