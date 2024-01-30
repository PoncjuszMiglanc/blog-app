import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		const storedValue = localStorage.getItem('isLoggedIn');
		return storedValue ? JSON.parse(storedValue) : false;
	});

	// const [userId, setUserId] = useState(null);

	const [userData, setUserData] = useState('');

	// const passId = (id) => {
	//   setUserId(id);
	// };

	const logIn = () => {
		setIsLoggedIn(true);
		localStorage.setItem('isLoggedIn', JSON.stringify(true));
	};

	const logOut = async () => {
		try {
			const response = await axios.post(
				'http://localhost:8080/logout',
				{},
				{
					withCredentials: true,
				}
			);
			if (response.status >= 200 && response.status < 300) {
				setIsLoggedIn(false);
				localStorage.removeItem('isLoggedIn');
				console.log(response.data);
			} else {
				console.log('błąd podczas wylogowania', response);
			}
		} catch (err) {
			console.log('błąd podczas zapytania', err);
		}
	};

	const getUserData = async (id) => {
		try {
			const response = await axios.get(`http://localhost:8080/user/${id}`);
			if (response.status >= 200 && response.status < 300) {
				const { userData } = response.data;
				setUserData(userData);
			} else {
				console.log('Wystąpił błąd podczas pobierania danych użytkownika');
			}
		} catch (err) {
			console.log('wystąpił błąd podczas pobierania danych użytkownika', err);
		}
	};

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, logIn, logOut, userData, getUserData }}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthProvider;
