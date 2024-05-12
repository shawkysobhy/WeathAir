import NumericTitle from './NumericTitle';

function PopulationContainer({ current }) {
	const {
		pollution: { maincn, aqicn, aqius, mainus },
	} = current.current;
	const { city } = current;

	return (
		<div className='w-full bg-gray-800 text-white p-3  justify-between md:p-6 rounded-md md:space-x-3    flex  flex-row space-y-4 '>
			<div className='flex-col space-y-1'>
				<p className='text-2xl  font-bold'>
					<span className='text-fuchsia-700'>Population</span> in{' '}
					<span>{city}</span>
				</p>
				<div className='flex items-center space-x-3'>
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
				<p>very good</p>
			</div>
		</div>
	);
}

export default PopulationContainer;
