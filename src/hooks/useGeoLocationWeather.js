import { getCityData } from '../services/apiWeather';
import { useEffect, useState } from 'react';
import { getWeatherByGeoLocation } from '../services/apiWeather';
import { useDispatch } from 'react-redux';
import { addCurrentCity } from '../state/currentCitySlice';
import useGeoLocation from './useGeoLocation';
import { current } from '../services/data';
const useGeoLocationWeather = (getLocation) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const { loading: locationLoading, location } = useGeoLocation();
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!locationLoading && location && getLocation) {
					setLoading(true);
					let cityData = await getWeatherByGeoLocation(location);
					dispatch(addCurrentCity(cityData));
					setLoading(false);
					console.log(cityData);
				}
			} catch (error) {
				setLoading(false);
				console.error('Error fetching city data:', error);
			}
		};
		fetchData();
	}, [location, getLocation]);

	return loading;
};

export default useGeoLocationWeather;
