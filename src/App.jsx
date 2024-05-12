import Home from './page/Home';
import Favourites from './page/Favourites';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import useFetchCity from './hooks/useFetchCity';
import { initailLocation } from './utils/utils';
import { Spinner } from './ui';
import './i18n';
export default function App() {
	const { loading } = useFetchCity(initailLocation);
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
	if (loading) return <Spinner />;
	return (
		<div>
			<main className='bg-base-300'>
				<RouterProvider router={router} />
			</main>
		</div>
	);
}
