function Select({ options, handleChange, customKey }) {
	return (
		<label className='form-control w-full max-w-[200px]'>
			<select
				className='select select-bordered select-md'
				onChange={(e) => {
					handleChange(e.target.value);
				}}>
				<option value={''} disabled defaultValue>
					Pick one
				</option>
				{options?.map((option, index) => {
					return (
						<option value={option[`${customKey}`]} key={index}>
							{option[`${customKey}`]}
						</option>
					);
				})}
			</select>
		</label>
	);
}

export default Select;
