export const formatDate = (dateString) => {
	const date = new Date(dateString);
	const year = date.getUTCFullYear().toString();
	const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
	const day = date.getUTCDate().toString().padStart(2, '0');
	const hour = date.getUTCHours().toString().padStart(2, '0');
	return `${day}/${month}/${year} at ${hour}h`;
};

export const getAirQualityLevel = (aqi) => {
	if (aqi >= 0 && aqi <= 50) {
		return { level: 'Good', color: 'text-green-500' };
	} else if (aqi <= 100) {
		return { level: 'Moderate', color: 'text-yellow-500' };
	} else if (aqi <= 150) {
		return {
			level: 'UnhealthyForSensitive',
			color: 'text-orange-500',
		};
	} else if (aqi <= 200) {
		return { level: 'Unhealthy', color: 'text-red-500' };
	} else if (aqi <= 300) {
		return { level: 'Very Unhealthy', color: 'text-purple-500' };
	} else if (aqi <= 500) {
		return { level: 'Hazardous', color: 'text-maroon-500' };
	} else {
		return { level: 'Invalid AQI', color: 'text-black' };
	}
};
