import { useSelector } from 'react-redux';
const useCurrentCityData = () => {
	const currentCityData = useSelector(
		(state) => state.currentCityData.currentCity.data
	);
	return currentCityData;
};

export default useCurrentCityData;
