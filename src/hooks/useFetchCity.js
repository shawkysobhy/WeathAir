import { getCityData } from '../services/apiWeather';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentCity } from '../state/currentCitySlice';
const useFetchCity = (location) => {
	const { country, city, state } = location;
	console.log('location fomr hook', location);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const fetchData = useCallback(async () => {
		if (country && city && state) {
			try {
				setLoading(true);
				const cityData = await getCityData(country, state, city);
				dispatch(addCurrentCity(cityData));
			} catch (error) {
				console.error('Error fetching city data:', error);
			} finally {
				setLoading(false);
			}
		} else {
			console.log('missed part of location');
		}
	}, [country, state, city]);

	useEffect(() => {
		fetchData();
	}, [location, fetchData]);

	return { loading };
};

export default useFetchCity;
