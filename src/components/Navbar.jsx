import { signIn, logoutUser } from '../state/userSlice';
import supabase from '../services/supabase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FaCloudSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Navbar() {
	const dispatch = useDispatch();
	const handleSignIn = async () => {
		try {
			const { user } = await supabase.auth.signInWithOAuth({
				provider: 'google',
			});
			if (error) {
				throw new Error(error.message);
			}
			dispatch(signIn(user));
		} catch (error) {
			console.error('Error signing in with Google:', error.message);
		}
	};
	const handleSignOut = async () => {
		await supabase.auth.signOut();
		dispatch(logoutUser());
	};
	useEffect(() => {
		const { data } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_IN') {
				dispatch(signIn(session));
			} else if (event === 'SIGNED_OUT') {
				dispatch(logoutUser());
			}
		});
		return () => {
			data.subscription.unsubscribe();
		};
	}, []);

	const user = useSelector((state) => state.user);
	return (
		<div className='flex items-center px-3 py-4 navbar bg-neutral text-neutral-content md:px-6'>
			<Link to='/' className='text-lg btn btn-ghost md:text-xl'>
				{' '}
				<FaCloudSun />
				Weather
			</Link>
			<div className='flex-1'>
				<nav className='ml-auto'>
					<ul className='flex font-medium '>
						<li>
							<Link to='/favourite' className='p-2 btn btn-ghost'>
								Faviourite
							</Link>
						</li>
						<li>
							{user.isLoggedIn ? (
								<button
									className='p-2 m-0 btn btn-ghost'
									onClick={handleSignOut}>
									Log out
								</button>
							) : (
								<button
									className='p-2 m-0 btn btn-ghost'
									onClick={handleSignIn}>
									Log in
								</button>
							)}
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
export default Navbar;
