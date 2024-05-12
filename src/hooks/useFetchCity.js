import { getCityData } from '../services/apiWeather';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentCity } from '../state/currentCitySlice';
const useFetchCity = (location) => {
	const { country, city, state } = location;
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true); // Set loading state to true when fetching data
				let cityData = await getCityData(country, state, city);
				dispatch(addCurrentCity(cityData));
				setLoading(false); // Set loading state to false when data is fetched
				console.log(cityData);
			} catch (error) {
				setLoading(false); // Set loading state to false if an error occurs during data fetching
				console.error('Error fetching city data:', error);
			}
		};
		fetchData();
	}, [city, state, country, dispatch]);

	return { loading }; // Return loading state from the hook
};

export default useFetchCity;
