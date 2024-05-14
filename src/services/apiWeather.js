export const getCountires = async () => {
	try {
		const response = await fetch(
			`https://api.airvisual.com/v2/countries?key=${
				import.meta.env.VITE_IQAIR_KEY
			}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching death data:', error);
		throw error;
	}
};

export const getStates = async (countryName) => {
	try {
		const response = await fetch(
			`https://api.airvisual.com/v2/states?country=${countryName}&key=${
				import.meta.env.VITE_IQAIR_KEY
			}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching :', error);
		throw error;
	}
};
export const getCities = async (countryName, stateName) => {
	try {
		const response = await fetch(
			`https://api.airvisual.com/v2/cities?state=${stateName}&country=${countryName}&key=${
				import.meta.env.VITE_IQAIR_KEY
			}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching death data:', error);
		throw error;
	}
};

export const getCityData = async (countryName, stateName, cityName) => {
	try {
		const response = await fetch(
			`https://api.airvisual.com/v2/city?city=${cityName}&state=${stateName}&country=${countryName}&key=${
				import.meta.env.VITE_IQAIR_KEY
			}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching death data:', error);
		throw error;
	}
};

export const getWeatherByGeoLocation = async (location) => {
	const { lat, lan } = location;
	try {
		const response = await fetch(
			`https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lan}&&key=${
				import.meta.env.VITE_IQAIR_KEY
			}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};
