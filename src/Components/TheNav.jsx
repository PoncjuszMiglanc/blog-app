import { Link } from 'react-router-dom';
import '../assets/scss/components/the-nav.scss';

const TheNav = () => {
	const logOut = (e) => {
		e.preventDefault();
		fetch('http://localhost:8080/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
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
	};

	return (
		<>
			<header className="header">
				<div className="header__wrapper">
					<Link to="/">LOGO</Link>
					<section className="header__panel">
						<nav>
							<ul>
								<li className="header__list-item">About</li>
								<li className="header__list-item">Kontakt</li>
								<li className="header__list-item">Coś</li>
								<li className="header__list-item">Kategorie</li>
								<li className="header__list-item">
									<Link to="/posts/1">Post</Link>
								</li>
								<li className="header__list-item">
									<Link to="/posts/create">Nowy</Link>
								</li>
							</ul>
						</nav>
						<div className="header__logins">
							<button
								onClick={logOut}
								className="header__sign header__sign--in"
							>
								Wyloguj
							</button>
							<button className="header__sign header__sign--in">
								<Link to="/signin">Zaloguj</Link>
							</button>
							<button className="header__sign header__sign--up">
								<Link to="/signup">Zarejestruj</Link>
							</button>
						</div>
					</section>
				</div>
			</header>
		</>
	);
};

export default TheNav;
