import { useEffect, useState } from 'react';
import { getFaviouriteCities } from '../services/apiAuth';
import { addFaviouriteCities } from '../state/faviouriteSlice';
import { useDispatch } from 'react-redux';
function useFaviouriteCities() {
	const [favouriteCities, setFavouriteCities] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchFaviouriteCities = async () => {
			let data = await getFaviouriteCities();
			dispatch(addFaviouriteCities(data));
			setFavouriteCities(data);
		};
		fetchFaviouriteCities();
	}, []);
	return favouriteCities;
}

export default useFaviouriteCities;
