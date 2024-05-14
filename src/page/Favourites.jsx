import { Navbar, FavouriteList } from '../components';
import { WeatherContainer, PollutionContainer } from '../ui';
import { useCurrentCity } from '../hooks';
function Favourites() {
	const currentCityData = useCurrentCity();
	return (
		<>
			<Navbar />
			<div className='min-h-screen px-4 py-8 mx-auto bg-base-300 max-w-7xl'>
				<div className='flex flex-col items-start space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 '>
					<WeatherContainer current={currentCityData} />
					<PollutionContainer current={currentCityData} />
				</div>
				<FavouriteList />
			</div>
		</>
	);
}

export default Favourites;
