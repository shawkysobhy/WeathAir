import supabase from './supabase';
export const signInWithGoogle = async () => {
	try {
		const response = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'rvlspwkdaliyuciqzqeo.supabase.co/auth/callback',
			},
		});
		if (error) {
			console.error('Error signing in with Google:', error.message);
			return;
		}
		console.log('Signed in with Google:', user);
		console.log(session);
		return response;
	} catch (error) {
		console.error('Error signing in with Google:', error.message);
	}
};
export const logIn = async () => {
	const { user } = await supabase.auth.signInWithOAuth({
		provider: 'google',
	});
	return user;
};
export const logOut = async () => {
	await supabase.auth.signOut();
};

export const addCity = async (city, userId) => {
	console.log(city, userId);
	await supabase.from('cities').insert([
		{
			city: city,
			user_id: userId,
		},
	]);
};

export const getFaviouriteCities = async () => {
	let res = await supabase.from('cities').select('*');
	if (res) return res.data;
};
export const deleteCity = async (id) => {
	let res = await supabase.from('cities').delete().eq('id', id);
	console.log('deleted', res);
};

