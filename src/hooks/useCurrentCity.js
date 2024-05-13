import { useSelector } from 'react-redux';
const useCurrentCity = () => {
	const currentCityData = useSelector(
		(state) => state.currentCityData.currentCity.data
	);
	return currentCityData;
};

export default useCurrentCity;
