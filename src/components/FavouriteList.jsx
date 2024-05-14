import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useFaviouriteCities from '../hooks/useFaviouriteCities';
import { getWeatherByGeoLocation } from '../services/apiWeather';
import { deleteCity } from '../services/apiSupabase';
import { addFaviouriteCities } from '../state/faviouriteSlice';
import { addCurrentCity } from '../state/currentCitySlice';
import useUser from '../hooks/useUser';
import { FavouriteCityItem } from './';
function FavouriteList() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const citiesList = useSelector((state) => state.faviouriteCities.cities);
	const user = useUser();
	useFaviouriteCities();
	const getCityDataHanlder = async (city) => {
		const { lan, lat } = JSON.parse(city.coordinate);
		const cityData = await getWeatherByGeoLocation({ lan, lat });
		dispatch(addCurrentCity(cityData));
	};
	const deleteCityHandler = async (city) => {
		deleteCity(city.id);
		const newData = citiesList.filter((cityObj) => cityObj.id !== city.id);
		dispatch(addFaviouriteCities(newData));
	};
	return (
		<div className='flex flex-col items-center justify-center py-6'>
			{user ? (
				<>
					<h1 className='my-4 text-2xl font-semibold text-white'>
						{t('faviouriteList')}
					</h1>
					<ul className='flex flex-wrap items-center gap-3 '>
						{citiesList?.map((city) => (
							<FavouriteCityItem
								city={city}
								key={city.city}
								deleteCityHandler={() => deleteCityHandler(city)}
								getCityDataHanlder={() => getCityDataHanlder(city)}
							/>
						))}
					</ul>
				</>
			) : (
				<div className='px-4 py-4 bg-gray-700 rounded-lg'>
					<h1 className='font-semibold text-green-500 text-md'>
						{t('addTofavMessage')}
						📃
					</h1>
				</div>
			)}
		</div>
	);
}

export default FavouriteList;
