import { logoutUser, signIn } from '../state/userSlice';
import { useDispatch } from 'react-redux';
const useLogIn = () => {
	const dispatch = useDispatch();
	async () => {
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
			dispatch(signIn(response));
			return response;
		} catch (error) {
			console.error('Error signing in with Google:', error.message);
		}
	};
	return response;
};
export default useLogIn;
