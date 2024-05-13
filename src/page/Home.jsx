import { WeatherContainer, PopulationContainer } from '../ui';
import { Navbar, CityPicker } from '../components';
import { useCurrentCity } from '../hooks';
import Greeting from '../ui/Greeting';
function Home() {
	const currentCityData = useCurrentCity();
	return (
		<>
			<Navbar />
			<div className='min-h-screen px-4 py-4 mx-auto bg-base-300 max-w-7xl'>
				<Greeting />
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
