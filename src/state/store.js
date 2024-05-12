import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import faviouriteSlice from './faviouriteSlice';
import currentCitySlice from './currentCitySlice';
const store = configureStore({
	reducer: {
		user: userReducer,
		faviouriteCities: faviouriteSlice,
		currentCityData: currentCitySlice,
	},
});

export default store;
