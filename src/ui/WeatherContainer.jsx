import { useTranslation } from 'react-i18next';
import CityTitleLocation from './CityTitleLocation';
import NumericTitle from './NumericTitle';

function WeatherContainer({ current }) {
	const { t } = useTranslation();

	const {
		weather: { tp, hu, ws },
	} = current.current;
	const { city, country, state } = current;
	return (
		<div className='flex flex-col w-full p-3 space-y-1 text-white bg-gray-800 rounded-md md:p-6 md:space-x-0'>
			<CityTitleLocation city={city} state={state} country={country} />
			<div className='flex items-center space-x-4'>
				<NumericTitle
					title={t('celsius')}
					num={tp}
					gradient={'from-yellow-500 to-orange-500'}
					sign={`\u00B0 C`}
				/>
				<NumericTitle
					title={t('humidity')}
					num={hu}
					gradient={'from-blue-500 to-sky-500'}
					sign={`%`}
				/>

				<NumericTitle
					title={t('windSpeed')}
					num={ws}
					gradient={'from-gray-400 to-white'}
					sign={`%`}
				/>
			</div>
		</div>
	);
}

export default WeatherContainer;
