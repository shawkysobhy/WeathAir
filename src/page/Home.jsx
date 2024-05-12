import { WeatherContainer, PopulationContainer } from '../ui';
import { Navbar, CityPicker } from '../components';
import { useCurrentCityData, useUser } from '../hooks';
import { formatDate } from '../helper/helper';
import { useTranslation } from 'react-i18next';
function Home() {
	const user = useUser();
	const currentCityData = useCurrentCityData();
	const {
		weather: { ts },
	} = currentCityData.current;

	const { t } = useTranslation();

	return (
		<>
			<Navbar />
			<div className='min-h-screen px-4 py-4 mx-auto bg-base-300 max-w-7xl'>
				<div className='flex items-center max-w-md gap-4 px-3 py-2 my-2 bg-gray-600 rounded-lg'>
					<h1 className='text-sm font-semibold text-blue-500'>
						{t('welcome')} {user && user?.user_metadata?.name}
					</h1>
					<h1 className='text-sm font-semibold text-white '>
						{formatDate(ts)}
					</h1>
				</div>
				<div className='flex flex-col items-start space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 '>
					<WeatherContainer current={currentCityData} />
					<PopulationContainer current={currentCityData} />
				</div>
				<CityPicker />
			</div>
		</>
	);
}

export default Home;
