import { createSlice } from '@reduxjs/toolkit';
import { current as CurrentData } from '../services/data';
const initialState = {
	currentCity: CurrentData,
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
