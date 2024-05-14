import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CustomButton, Select } from './';
import { addCurrentCity } from '../state/currentCitySlice';
import { getCities, getCityData, getStates } from '../services/apiWeather';
import useUser from '../hooks/useUser';
import { countries } from '../services/data';
import { addCity } from '../services/apiSupabase';
import {
	useFaviouriteCities,
	useGeoLocationWeather,
	useCurrentCity,
} from '../hooks';
import { useTranslation } from 'react-i18next';
function CityPicker() {
	const [getLocation, setGetLocation] = useState(false);
	const [stateList, setStateList] = useState([]);
	const [cityList, setCityList] = useState([]);
	const [currentCountry, setCurrentCountry] = useState('');
	const [currentState, setCurrentState] = useState('');
	const [currentCity, setCurrentCity] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);
	const user = useUser();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	useGeoLocationWeather(getLocation);
	let favouriteCities = useFaviouriteCities();
	useEffect(() => {
		const getStateList = async () => {
			if (currentState) {
				let citiesList = await getCities(currentCountry, currentState);
				if (citiesList.status === 'success') {
					setCityList(citiesList.data);
					setCurrentCity(citiesList.data[0]?.city);
					setErrorMessage('');
				} else {
					setErrorMessage('no cities aviable on these state');
				}
			}
		};
		getStateList();
	}, [currentState]);

	useEffect(() => {
		const getCityList = async () => {
			setStateList([]);
			setCityList([]);
			setErrorMessage('');
			if (currentCountry) {
				let stateList = await getStates(currentCountry);
				setStateList(stateList.data);
			}
		};
		getCityList();
	}, [currentCountry]);
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

	const cityData = useCurrentCity();
	const handleAddFavourite = async () => {
		// location=JSON.stringify(cityData.location.coordinates));
		const location = {
			lan: cityData.location.coordinates[0],
			lat: cityData.location.coordinates[1],
		};
		console.log(JSON.stringify(location));
		const city = `${cityData.country},${cityData.state},${cityData.city}`;
		const isCityIncluded = favouriteCities.some(
			(cityObj) => cityObj.city === city
		);
		if (isCityIncluded) {
			console.log('already added');
			return;
		} else {
			await addCity(city, location, user?.id);
		}
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
				{cityList.length ? (
					<Select
						options={cityList}
						customKey={'city'}
						handleChange={setCurrentCity}
					/>
				) : (
					<p>{errorMessage}</p>
				)}
			</div>
			<div className='flex flex-wrap justify-center gap-3 mx-auto items-bottom'>
				<CustomButton
					disabled={!user}
					bgColor='bg-green-600'
					onClick={() => handleAddFavourite()}>
					{t('addToFavourite')}
				</CustomButton>
				<CustomButton
					bgColor='bg-blue-600'
					onClick={() => setGetLocation(true)}>
					{t('getMyLocation')}
				</CustomButton>
			</div>
		</>
	);
}

export default CityPicker;
