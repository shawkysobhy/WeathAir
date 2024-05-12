import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n.use(initReactI18next).init({
	supportedLngs: ['en', 'fr'],
	debug: true,
	fallbackLng: 'en',
	load: 'currentOnly',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: {
				welcome: 'Welcome',
				addToFavourite: 'Add to Favourite',
				getMyLocation: 'Get with my location',
				weather: 'Weather',
				favourites: 'Favourites',
				logIn: 'Log in',
				logOut: 'Log out',
				celsius: 'Celsius',
				humidity: 'Humidity',
				windSpeed: 'Wind speed',
				faviouriteList: 'faviourte list',
				delete: 'Delete',
				Good: 'Good',
				Moderate: 'Moderate',
				UnhealthyForSensitive: 'Unhealthy for Sensitive',
				Unhealthy: 'Unhealthy',
				VeryUnhealthy: 'Very Unhealthy',
				Hazardous: 'Hazardous',
				addTofavMessage:
					'you must create account and login to add cities to your faviouritess',
			},
		},
		fr: {
			translation: {
				welcome: 'Bonjour',
				addToFavourite: 'Ajouter aux favoris',
				getMyLocation: 'Obtenir ma position',
				weather: 'Météo',
				favourites: 'Préférée',
				logIn: 'Connexion',
				logOut: 'Déconnexion',
				celsius: 'Celsius',
				humidity: 'Humidité',
				windSpeed: 'Vitesse du vent',
				faviouriteList: 'Liste des favoris',
				delete: 'Supprimer',
				Good: 'bon',
				Moderate: 'Modérée',
				UnhealthyForSensitive: 'Malsain pour sensible',
				Unhealthy: 'Malsain',
				VeryUnhealthy: 'Très malsain',
				Hazardous: 'Hasardeuse',
				addTofavMessage:
					'vous devez créer un compte et vous connecter pour ajouter des villes à vos favoris',
			},
		},
	},
});

export default i18n;
