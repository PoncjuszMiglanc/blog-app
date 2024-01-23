import MainContainer from '../Components/MainContainer';
import '../assets/scss/pages/delete-user.scss';
import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteUser = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const { id } = useParams();
	const navigate = useNavigate();

	const deleteUserData = async (e) => {
		e.preventDefault;
		try {
			const response = await axios.post(
				`http://localhost:8080/user/delete/${id}`,
				{ login, password }
			);

			if (response.status >= 200 && response.status < 300) {
				console.log(response.data);
				navigate('/');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<MainContainer>
			<section className="delete-card">
				<h1 className="delete-card__title">Usuwanie Konta</h1>
				<p className="delete-card__subtitle">
					Aby usunąć konto musisz podać swój login oraz hasło
				</p>
				<form className="delete-card__forms">
					<div className="delete-card__form">
						<label className="delete-card__label" htmlFor="username">
							Login
						</label>
						<input
							className="delete-card__input"
							id="username"
							type="text"
							onChange={(e) => setLogin(e.target.value)}
						/>
					</div>
					<div className="delete-card__form">
						<label className="delete-card__label" htmlFor="password">
							Hasło
						</label>
						<input
							className="delete-card__input"
							id="username"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</form>
				<div className="delete-card__btns">
					<button className="delete-card__btn">Anuluj</button>
					<button className="delete-card__btn" onClick={deleteUserData}>
						Usuń
					</button>
				</div>
			</section>
		</MainContainer>
	);
};

export default DeleteUser;
