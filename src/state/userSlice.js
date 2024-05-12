import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	user: null,
	isLoggedIn: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signIn: (state, action) => {
			state.user = action.payload;
			state.isLoggedIn = true;
		},
		logoutUser: (state) => {
			state.user = null;
			state.isLoggedIn = false;
		},
	},
});

export const { signIn, logoutUser } = userSlice.actions;

export default userSlice.reducer;
