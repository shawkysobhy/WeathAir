const CustomButton = ({ disabled, onClick, color, bgColor, children }) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`medium-button text-white ${bgColor} ${color} ${
				disabled ? 'opacity-55 cursor-not-allowed' : ''
			} hover:opacity-70`}>
			{children}
		</button>
	);
};
export default CustomButton;
