import Home from './page/Home';
import Favourites from './page/Favourites';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import useFetchCity from './hooks/useFetchCity';
import { initailLocation } from './utils/utils';
import './i18n';
export default function App() {
	useFetchCity(initailLocation);
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/favourite',
			element: <Favourites />,
		},
	]);
	return (
		<div>
			<main className='bg-base-300'>
				<RouterProvider router={router} />
			</main>
		</div>
	);
}
