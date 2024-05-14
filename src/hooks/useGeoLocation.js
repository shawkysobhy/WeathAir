import { useState, useEffect } from 'react';

const useGeoLocation = () => {
	const [location, setLocation] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { longitude: lan, latitude: lat } = position.coords;
						console.log(position.coords);
						console.log(lan, lat);
						setLocation({ lan: lan, lat: lat });
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
