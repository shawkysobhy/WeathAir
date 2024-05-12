import { useSelector, useDispatch } from 'react-redux';
import { deleteCity } from '../services/apiSupabase';
import { getCityData } from '../services/apiWeather';
import { addFaviouriteCities } from '../state/faviouriteSlice';
import { addCurrentCity } from '../state/currentCitySlice';
import useFaviouriteCities from '../hooks/useFaviouriteCities';
import useUser from '../hooks/useUser';
import { useTranslation } from 'react-i18next';
function FavouriteList() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const citiesList = useSelector((state) => state.faviouriteCities.cities);
	const user = useUser();
	useFaviouriteCities();
	const getCityDataHanlder = async (city) => {
		const [country, stateName, cityName] = city.split(',');
		let cityData = await getCityData(country, stateName, cityName);
		dispatch(addCurrentCity(cityData));
	};
	const handleDeleteCity = async (city) => {
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
					<ul className='flex flex-wrap items-center gap-2 '>
						{citiesList?.map((city) => (
							<li key={city.city} className='flex flex-wrap space-x-1'>
								<button
									className='text-white btn btn-neutral hover:opacity-60'
									onClick={() => getCityDataHanlder(city.city)}>
									{city.city}
								</button>
								<button
									className='text-white bg-red-500 btn'
									onClick={() => handleDeleteCity(city)}>
									{t('delete')}
								</button>
							</li>
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
