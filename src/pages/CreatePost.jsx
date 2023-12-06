import { useState } from 'react';
import MainContainer from '../Components/MainContainer';
import InputField from '../Components/InputField';
import '../assets/scss/pages/create-post.scss';

const CreatePost = () => {
	//chcę, żeby to było szersze, ale to potem

	const [kategoria, setKategoria] = useState('recenzja');
	const [tytuł, setTytuł] = useState('');
	const [lead, setLead] = useState('');
	const [autor, setAutor] = useState('');
	const [image, setImage] = useState('');
	const [treść, setTreść] = useState('');

	const createPost = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('category', kategoria);
		formData.append('title', tytuł);
		formData.append('lead', lead);
		formData.append('author', autor);
		formData.append('image', image);
		formData.append('content', treść);

		fetch('http://localhost:8080/post', {
			method: 'POST',
			body: formData,
			credentials: 'include',
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});

		setKategoria('recenzja');
		setTytuł('');
		setLead('');
		setAutor('');
		setImage('');
		setTreść('');
	};

	//tytuł (komponent input), treść (normalny input) nie dochodzą do bazy danych

	return (
		<MainContainer>
			<div className="create">
				<h1 className="create__title">Create Post</h1>
				<form onSubmit={createPost}>
					<div className="category">
						<label className="category__label" htmlFor="kategorie">
							Kategoria
						</label>
						<select
							className="category__select"
							name="kategoria"
							id="kategoria"
							onChange={(e) => setKategoria(e.target.value)}
						>
							<option className="category__option" value="recenzja">
								Recenzja
							</option>
							<option className="category__option" value="artykuł">
								Artykuł
							</option>
							<option className="category__option" value="esej">
								Esej
							</option>
						</select>
					</div>
					<InputField
						label={'Tytuł'}
						type={'text'}
						placeholder={'Wpisz tytuł tekstu'}
						id={'tytuł'}
						value={tytuł}
						setValue={setTytuł}
					/>
					<div className="lead">
						<label className="lead__label" htmlFor="lead">
							Lead
						</label>
						<textarea
							className="lead__textfield"
							name=""
							id="lead"
							cols="30"
							rows="3"
							value={lead}
							onChange={(e) => setLead(e.target.value)}
						></textarea>
					</div>
					<InputField
						label={'Autor'}
						type={'text'}
						placeholder={'Nazwa autora wpisu'}
						id={'autor'}
						value={autor}
						setValue={setAutor}
					/>
					<div className="photo">
						<label className="photo__label" htmlFor="photo">
							Dodaj grafikę
						</label>
						<input
							className="photo__input"
							type="file"
							onChange={(e) => setImage(e.target.files[0])}
							id="photo"
						/>
					</div>
					<div className="lead">
						<label className="lead__label" htmlFor="lead">
							Treść
						</label>
						<textarea
							className="lead__textfield"
							name=""
							id="lead"
							cols="30"
							rows="6"
							value={treść}
							onChange={(e) => setTreść(e.target.value)}
						></textarea>
					</div>
					<button className="card__btn">Opublikuj</button>
				</form>
			</div>
		</MainContainer>
	);
};

export default CreatePost;
