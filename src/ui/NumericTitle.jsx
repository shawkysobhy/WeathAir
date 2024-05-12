function NumericTitle({ num, title, sign, gradient }) {
	return (
		<div
			className={`flex flex-col space-y-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
			<p className=' text-xl sm:text-2xl md:text-3xl font-bold '>
				{num} {sign}
			</p>
			<p className='text-xs text-center '>{title}</p>
		</div>
	);
}

export default NumericTitle;
