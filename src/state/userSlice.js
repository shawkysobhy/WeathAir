import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	user: null,
	isLoggedIn: false,
};

// Define the slice
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
