import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Select } from './';
import { addCurrentCity } from '../state/currentCitySlice';
import { getCities, getCityData, getStates } from '../services/apiWeather';
import useUser from '../hooks/useUser';
import { countries } from '../services/data';
import { addCity } from '../services/apiSupabase';
import {
	useFaviouriteCities,
	useGeoLocationWeather,
	useCurrentCityData,
} from '../hooks';
import { useTranslation } from 'react-i18next';
function CityPicker() {
	const [stateList, setStateList] = useState([]);
	const [cityList, setCityList] = useState([]);
	const [currentCountry, setCurrentCountry] = useState('');
	const [currentState, setCurrentState] = useState('');
	const [currentCity, setCurrentCity] = useState('');
	const user = useUser();
	const dispatch = useDispatch();
	const { t } = useTranslation();

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
			<div className='flex flex-wrap justify-center gap-3 mx-auto items-bottom'>
				<button
					disabled={!user}
					className={`medium-button text-white bg-green-600 ${
						!user ? 'opacity-55 cursor-not-allowed' : ''
					}`}
					onClick={() =>
						handleAddFavourite(currentCountry, currentState, currentCity)
					}>
					{t('addToFavourite')}
				</button>
				<button
					className={`medium-button text-white bg-blue-600`}
					onClick={() => setGetLocation(true)}>
					{t('getMyLocation')}
				</button>
			</div>
		</>
	);
}

export default CityPicker;
