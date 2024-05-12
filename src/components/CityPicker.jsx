import { useEffect, useState } from 'react';
import Select from './Select';
import { getCities, getCityData, getStates } from '../services/apiWeather';
import useUser from '../hooks/useUser';
import { countries } from '../services/data';
import { addCurrentCity } from '../state/currentCitySlice';
import { useDispatch } from 'react-redux';
import { addCity } from '../services/apiAuth';
import useFaviouriteCities from '../hooks/useFaviouriteCities';
import useGeoLocationWeather from '../hooks/useGeoLocationWeather';
import useCurrentCityData from '../hooks/useCurrentCityData';
function CityPicker() {
	const [stateList, setStateList] = useState([]);
	const [cityList, setCityList] = useState([]);
	const [currentCountry, setCurrentCountry] = useState('');
	const [currentState, setCurrentState] = useState('');
	const [currentCity, setCurrentCity] = useState('');
	const user = useUser();
	const dispatch = useDispatch();
	useEffect(() => {
		const getCityList = async () => {
			if (currentCountry) {
				let stateList = await getStates(currentCountry);
				setStateList(stateList.data);
			}
		};
		getCityList();
	}, [currentCountry]);
	useEffect(() => {
		const getStateList = async () => {
			if (currentState) {
				let citiesList = await getCities(currentCountry, currentState);
				setCityList(citiesList.data);
				setCurrentCity(citiesList.data[0]?.city);
			}
		};
		getStateList();
	}, [currentState]);
	useEffect(() => {
		const getCity = async () => {
			if (currentCity) {
				let cityData = await getCityData(
					currentCountry,
					currentState,
					currentCity
				);
				dispatch(addCurrentCity(cityData));
			}
		};
		getCity();
	}, [currentCity]);
	const [getLocation, setGetLocation] = useState(false);
	useGeoLocationWeather(getLocation);
	let favouriteCities = useFaviouriteCities();
	const cityData = useCurrentCityData();
	const handleAddFavourite = async () => {
		const city = `${cityData.country},${cityData.state},${cityData.city}`;
		const isCityIncluded = favouriteCities.some(
			(cityObj) => cityObj.city === city
		);
		if (isCityIncluded) {
			console.log('already added');
			return;
		}
		await addCity(city, user?.id);
	};
	return (
		<>
			<div className='flex flex-col flex-wrap items-center justify-center py-4 mx-auto space-y-3 md:space-y-0 items-bottom md:flex-row md:space-x-4'>
				<Select
					options={countries.data}
					handleChange={setCurrentCountry}
					customKey={'country'}
				/>
				{stateList.length > 0 && (
					<Select
						options={stateList}
						customKey={'state'}
						handleChange={setCurrentState}
					/>
				)}
				{cityList.length > 0 && (
					<Select
						options={cityList}
						customKey={'city'}
						handleChange={setCurrentCity}
					/>
				)}
			</div>
			<div className='flex flex-wrap justify-center mx-auto space-x-4 items-bottom'>
				{/* <CustomButton
					onClickHandler={() =>
						handleAddFavourite(currentCountry, currentState, currentCity)
					}>
					Add to Favourite
				</CustomButton> */}
				<button
					disabled={!user}
					className={`px-4 py-2 text-md font-medium text-white bg-green-600 rounded-md shadow-md ${
						!user ? 'opacity-55 cursor-not-allowed' : ''
					}`}
					onClick={() =>
						handleAddFavourite(currentCountry, currentState, currentCity)
					}>
					Add to Favourite
				</button>
				<button
					disabled={!user}
					className={`px-4 py-2 text-md font-medium text-white bg-blue-600 rounded-md shadow-md`}
					onClick={() => setGetLocation(true)}>
					get with my location
				</button>
			</div>
		</>
	);
}

export default CityPicker;
