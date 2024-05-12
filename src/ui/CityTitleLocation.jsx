import React from 'react'

function CityTitleLocation({city,country,state}) {
  return (
		<div className='flex flex-row items-end space-x-2'>
			<h1 className=' text-2xl md:text-2xl font-bold'>{city}</h1>
			<div className=' font-medium text-sm'>{` 	${state} , ${country}`}</div>
		</div>
	);
}

export default CityTitleLocation