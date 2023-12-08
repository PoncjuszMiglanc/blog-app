import { useState } from 'react';
import MainContainer from '../Components/MainContainer';
import FormCard from '../Components/FormCard';

const SignIn = () => {
	//redirectem trzba będzie się zająć
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const handler = (e) => {
		e.preventDefault();
		console.log(email, pass);
		fetch('http://localhost:8080/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				pass,
			}),
			credentials: 'include',
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log('to jest respons', res);
			})
			.catch((err) => {
				console.log(err);
			});

		setEmail('');
		setPass('');
	};

	const items = [
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
			type: 'text',
			id: 'pass',
			setValue: setPass,
			value: pass,
		},
	];

	const cardText = {
		head: 'Logowanie',
		sub: 'Cieszymy się, że wróciłeś. Zapraszamy do ponownego zalogowania :)',
		btn: 'Zaloguj',
		cta: 'Nie masz jeszcze konta?',
		invitation: 'Załóż konto za darmo!',
		link: '/signup',
		sendData: handler,
	};

	return (
		<MainContainer>
			<FormCard items={items} cardText={cardText} />
		</MainContainer>
	);
};

export default SignIn;
