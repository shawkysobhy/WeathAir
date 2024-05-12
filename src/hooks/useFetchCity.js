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
				setLoading(true);
				let cityData = await getCityData(country, state, city);
				dispatch(addCurrentCity(cityData));
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.error('Error fetching city data:', error);
			}
		};
		fetchData();
	}, [city, state, country, dispatch]);

	return { loading };
};

export default useFetchCity;
