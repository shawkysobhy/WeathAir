import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signIn, logoutUser } from '../state/userSlice';
import supabase from '../services/supabase';
import { useDispatch, useSelector } from 'react-redux';
import { FaCloudSun } from 'react-icons/fa';
import { logIn, logOut } from '../services/apiSupabase';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
function Navbar() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const handleSignIn = async () => {
		logIn();
	};
	const handleSignOut = async () => {
		logOut();
	};
	const { t } = useTranslation();

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
	const languages = [
		{ code: 'en', name: 'En' },
		{ code: 'fr', name: 'Fr' },
	];
	return (
		<div className='flex items-center px-3 py-4 navbar bg-neutral text-neutral-content md:px-6'>
			<Link to='/' className='text-lg btn btn-ghost md:text-xl'>
				<FaCloudSun />
				{t('welcome')}
			</Link>
			<div className='flex-1'>
				<nav className='ml-auto mr-6'>
					<ul className='flex font-medium '>
						<li>
							<Link to='/favourite' className='p-2 btn btn-ghost'>
								{t('favourites')}
							</Link>
						</li>
						<li>
							{user.isLoggedIn ? (
								<button
									className='p-2 m-0 btn btn-ghost'
									onClick={handleSignOut}>
									{t('logOut')}
								</button>
							) : (
								<button
									className='p-2 m-0 btn btn-ghost'
									onClick={handleSignIn}>
									{t('logIn')}
								</button>
							)}
						</li>
						<li className='flex items-center justify-center h-12 p-3 hover:text-blue-400'>
							<label className='swap'>
								<input type='checkbox' />
								<div
									className='swap-on '
									onClick={() => i18n.changeLanguage('fr')}>
									En
								</div>
								<div
									className='swap-off'
									onClick={() => i18n.changeLanguage('en')}>
									Fr
								</div>
							</label>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
export default Navbar;
