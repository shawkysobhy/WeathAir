import { useTranslation } from 'react-i18next';
import { useCurrentCityData, useUser } from '../hooks';
import { formatDate } from '../helper/helper';

function Greeting() {
	const { t } = useTranslation();
	const user = useUser();
	const currentCityData = useCurrentCityData();
	const {
		weather: { ts },
	} = currentCityData.current;

	return (
		<div className='flex items-center max-w-md gap-4 px-3 py-2 my-2 bg-gray-600 rounded-lg'>
			<h1 className='text-sm font-semibold text-blue-500'>
				{t('welcome')} {user && user?.user_metadata?.name}
			</h1>
			<h1 className='text-sm font-semibold text-white '>{formatDate(ts)}</h1>
		</div>
	);
}

export default Greeting;
