import { useState } from 'react';
import MainContainer from '../Components/MainContainer';
import FormCard from '../Components/FormCard';

const SignUp = () => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const sendData = (e) => {
		e.preventDefault();

		fetch('http://localhost:8080/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userName,
				email,
				password,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log('Zarejestrowano', res);
			})
			.catch((err) => {
				console.log(err);
			});

		setUserName('');
		setEmail('');
		setPassword('');
	};
	//obiekt z danymi gdzie items to [] a text to {}
	//albo tak jak jest teraz tylko,że w storze (redux)
	const items = [
		{
			label: 'Nazwa użytkownika',
			placeholder: 'Podaj nazwę użytkownika',
			type: 'text',
			id: 'username',
			setValue: setUserName,
			value: userName,
		},
		{
			label: 'Email',
			placeholder: 'Podaj adres email',
			type: 'text',
			id: 'email',
			setValue: setEmail,
			value: email,
		},
		{
			label: 'Hasło',
			placeholder: 'Podaj hasło',
			type: 'password',
			id: 'pass',
			setValue: setPassword,
			value: password,
		},
	];

	const cardText = {
		head: 'Rejestracja',
		sub: 'Cieszymy się, że chcesz do nas dołączyć. Wyślij formularz kontaktowy i zacznij publikować własne posty.',
		btn: 'Zarejestruj',
		cta: 'Posiadasz już konto?',
		invitation: 'Zaloguj się!',
		link: '/signin',
		sendData: sendData,
	};

	return (
		<MainContainer>
			<FormCard items={items} cardText={cardText} />
		</MainContainer>
	);
};

export default SignUp;
