import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	currentCity: null,
};

const currentcitySlice = createSlice({
	name: 'currentCity',
	initialState,
	reducers: {
		addCurrentCity: (state, action) => {
			state.currentCity = action.payload;
		},
	},
});

export const { addCurrentCity } = currentcitySlice.actions;

export default currentcitySlice.reducer;
