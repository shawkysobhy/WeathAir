import { useState, useEffect } from 'react';

const useGeoLocation = () => {
	const [location, setLocation] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude } = position.coords;
						setLocation({ latitude, longitude });
						setLoading(false); // Set loading to false when location is fetched
					},
					(error) => {
						console.error('Error getting geolocation:', error);
						setLoading(false); // Set loading to false on error
					}
				);
			} else {
				console.error('Geolocation is not supported by this browser.');
				setLoading(false); // Set loading to false if geolocation is not supported
			}
		};

		getLocation();
	}, []);

	return { loading, location };
};

export default useGeoLocation;
