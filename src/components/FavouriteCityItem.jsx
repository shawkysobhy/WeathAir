import { useTranslation } from 'react-i18next';
import { CustomButton } from './';

export const FavouriteCityItem = ({
	city,
	deleteCityHandler,
	getCityDataHanlder,
}) => {
	const { t } = useTranslation();

	return (
		<li key={city.city} className='flex flex-wrap space-x-1'>
			<CustomButton bgColor='bg-gray-700' onClick={getCityDataHanlder}>
				{city.city}
			</CustomButton>
			<CustomButton bgColor={'bg-red-500 '} onClick={deleteCityHandler}>
				{t('delete')}
			</CustomButton>
		</li>
	);
};

export default FavouriteCityItem;
