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
						setLoading(false);
					},
					(error) => {
						console.error('Error getting geolocation:', error);
						setLoading(false); 
					}
				);
			} else {
				console.error('Geolocation is not supported by this browser.');
				setLoading(false);
			}
		};

		getLocation();
	}, []);

	return { loading, location };
};

export default useGeoLocation;
