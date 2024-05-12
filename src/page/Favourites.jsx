import Navbar from '../components/Navbar';
import WeatherContainer from '../ui/WeatherContainer';
import PopulationContainer from '../ui/PopulationContainer';
import FavouriteList from '../components/FavouriteList';
import { useSelector } from 'react-redux';
import useCurrentCityData from '../hooks/useCurrentCityData';
function Favourites() {
	const currentCityData = useCurrentCityData();
	return (
		<>
			<Navbar />
			<div className='min-h-screen px-4 py-8 mx-auto bg-base-300 max-w-7xl'>
				<div className='flex flex-col items-start space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 '>
					<WeatherContainer current={currentCityData} />
					<PopulationContainer current={currentCityData} />
				</div>
				<FavouriteList />
			</div>
		</>
	);
}

export default Favourites;
