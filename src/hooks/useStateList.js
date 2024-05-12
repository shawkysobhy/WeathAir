import { useState, useEffect } from 'react';
import { getStates } from '../services/apiWeather';
async function fetchStates(currentCountry) {
	if (!currentCountry) {
		return [];
	}
	const data = await getStates(currentCountry);
	return data;
}

export default function useStateList(currentCountry) {
	const [stateList, setStateList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const data = await fetchStates(currentCountry);
				setStateList(data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [currentCountry]);

	return { stateList, isLoading, error };
}
