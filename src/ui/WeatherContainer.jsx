import CityTitleLocation from './CityTitleLocation';
import NumericTitle from './NumericTitle';

function WeatherContainer({ current }) {
	const {
		weather: { tp, hu, ws },
	} = current.current;
	const { city, country, state } = current;
	return (
		<div className='w-full bg-gray-800 text-white p-3  md:p-6 rounded-md    flex  flex-col space-y-1  md:space-x-0'>
			<CityTitleLocation city={city} state={state} country={country} />
			<div className='flex items-center space-x-3'>
				<NumericTitle
					title={'Celsius'}
					num={tp}
					gradient={'from-yellow-500 to-orange-500'}
					sign={`\u00B0 C`}
				/>
				<NumericTitle
					title={'Humidity'}
					num={hu}
					gradient={'from-blue-500 to-sky-500'}
					sign={`%`}
				/>
				<NumericTitle
					title={'Wind speed'}
					num={ws}
					gradient={'from-gray-400 to-white'}
					sign={`%`}
				/>
			</div>
		</div>
	);
}

export default WeatherContainer;
