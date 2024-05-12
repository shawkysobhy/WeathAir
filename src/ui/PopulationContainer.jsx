import { getAirQualityLevel } from '../helper/helper';
import NumericTitle from './NumericTitle';
import { useTranslation } from 'react-i18next';
function PopulationContainer({ current }) {
	const {
		pollution: { maincn, aqicn, aqius, mainus },
	} = current.current;
	const { city } = current;
	const { level, color } = getAirQualityLevel(aqius);
	const { t } = useTranslation();
	return (
		<div className='flex flex-row justify-between w-full p-3 space-y-4 text-white bg-gray-800 rounded-md md:p-6 md:space-x-3 '>
			<div className='flex-col space-y-1'>
				<p className='text-2xl font-bold'>
					<span className='text-fuchsia-700'>Population</span> in{' '}
					<span>{city}</span>
				</p>
				<div className='flex items-center space-x-4'>
					<NumericTitle
						title={'mainus'}
						num={mainus}
						gradient={'from-blue-500 to-sky-500'}
					/>
					<NumericTitle
						title={'aqicn'}
						num={aqicn}
						gradient={'from-gray-400 to-white'}
					/>
					<NumericTitle
						title={'maincn'}
						num={maincn}
						gradient={'from-gray-400 to-white'}
					/>
				</div>
			</div>
			<div>
				<NumericTitle
					title={''}
					num={aqius}
					gradient={'from-green-500 to-orange-500 text-3xl'}
					sign={`AQ`}
				/>
				<p className={`${color} text-center`}>{t(level)}</p>
			</div>
		</div>
	);
}

export default PopulationContainer;
