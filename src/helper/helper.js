function interpolateColor(color1, color2, value) {
	const color1Hex = parseInt(color1.replace(/^#/, ''), 16);
	const color2Hex = parseInt(color2.replace(/^#/, ''), 16);

	const r1 = (color1Hex >> 16) & 255;
	const g1 = (color1Hex >> 8) & 255;
	const b1 = color1Hex & 255;

	const r2 = (color2Hex >> 16) & 255;
	const g2 = (color2Hex >> 8) & 255;
	const b2 = color2Hex & 255;

	const r = Math.round(r1 + ((r2 - r1) * value) / 50);
	const g = Math.round(g1 + ((g2 - g1) * value) / 50);
	const b = Math.round(b1 + ((b2 - b1) * value) / 50);

	return `rgb(${r}, ${g}, ${b})`;
}

function saveSessionData(user) {
	localStorage.setItem('user', JSON.stringify(user));
}

function clearSessionData() {
	localStorage.removeItem('user');
}
