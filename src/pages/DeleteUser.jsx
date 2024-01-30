import MainContainer from '../Components/MainContainer';
import DeleteModal from '../Components/DeleteModal';
import '../assets/scss/pages/delete-user.scss';
import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../Hooks/AuthHooks';

const DeleteUser = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	const [showErrMsg, setShowErrMsg] = useState(false);

	const { logOut } = useAuth();

	const { id } = useParams();
	const navigate = useNavigate();

	const deleteUser = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.delete(
				`http://localhost:8080/user/delete/${id}`
			);

			if (response.status >= 200 && response.status < 300) {
				console.log('udało się usunąć', response.data);
				logOut();
				navigate('/');
				//przyda się strona informująca o usunięciu
			} else {
				console.log('błąd po stronie rządania', response.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const validateUserData = async (e) => {
		e.preventDefault;
		try {
			const response = await axios.post(
				`http://localhost:8080/user/validate/${id}`,
				{ login, password }
			);

			if (response.status >= 200 && response.status < 300) {
				setIsVisible(response.data.authorized);
				console.log(response.data);
			} else {
				setShowErrMsg(true);
				console.log(response.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<MainContainer>
			<section className="delete-card">
				{isVisible ? (
					<DeleteModal
						setIsVisible={setIsVisible}
						deleteFunc={deleteUser}
						txt={'użytkownika'}
					/>
				) : (
					''
				)}
				<button onClick={() => console.log(login, password)}>Test</button>
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
					{showErrMsg ? (
						<div className="delete-card__err-msg">
							Podane hasło lub login są nieprawidłowe
						</div>
					) : (
						''
					)}
				</form>
				<div className="delete-card__btns">
					<button className="delete-card__btn">Anuluj</button>
					<button className="delete-card__btn" onClick={validateUserData}>
						Usuń
					</button>
				</div>
			</section>
		</MainContainer>
	);
};

export default DeleteUser;
