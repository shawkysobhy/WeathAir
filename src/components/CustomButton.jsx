function CustomButton({ onClickHandler, children, classes }) {
	return (
		<button
			className={`btn btn-neutral max-w-[100px] ${classes}`}
			onClick={onClickHandler}>
			{children}
		</button>
	);
}

export default CustomButton;
