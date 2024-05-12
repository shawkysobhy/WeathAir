import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	cities: [],
};
const faviouriteCitiesSlice = createSlice({
	name: 'faviourites',
	initialState,
	reducers: {
		addFaviouriteCities: (state, action) => {
			state.cities = [...action.payload];
		},
	},
});

export const { addFaviouriteCities } = faviouriteCitiesSlice.actions;

export default faviouriteCitiesSlice.reducer;
