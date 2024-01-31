import { useState } from 'react';
import ReactQuill from 'react-quill';
import MainContainer from '../Components/MainContainer';
import 'react-quill/dist/quill.snow.css';
import '../assets/scss/pages/create-post.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const modules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image', 'video'],
		['clean'],
	],
};

const formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'link',
	'image',
	'video',
];

const CreatePost = () => {
	//chcę, żeby to było szersze, ale to potem

	const [kategoria, setKategoria] = useState('recenzja');
	const [tytuł, setTytuł] = useState('');
	const [lead, setLead] = useState('');
	const [image, setImage] = useState('');
	const [treść, setTreść] = useState('');
	const [tags, setTags] = useState([]);

	const navigate = useNavigate();

	const createTags = (e) => {
		const trimmedTags = e.target.value.replace(/\s{2,}/g, ' ');
		// const separatedTags = trimmedTags.split(',').map((tag) => tag.trim());
		setTags(trimmedTags);
	};

	const createPost = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('category', kategoria);
		formData.append('title', tytuł);
		formData.append('lead', lead);
		formData.append('image', image);
		formData.append('tags', tags);
		formData.append('content', treść);

		// formData.forEach((val, key) => {
		// 	console.log(key, val);
		// });

		try {
			const response = await axios.post(
				'http://localhost:8080/post',
				formData,
				{ withCredentials: true }
			);

			if (response.status >= 200 && response.status < 300) {
				console.log('utworzono posta', response.data);
				navigate('/');
			} else {
				console.log('błąd podczas tworzenia posta');
			}

			setKategoria('recenzja');
			setTytuł('');
			setLead('');
			setImage('');
			setTreść('');
			setTags([]);
		} catch (err) {
			console.log('wystąpił błąd podczas rządania: ', err);
		}
	};

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

					<div className="input">
						<label className="input__label" htmlFor="tytuł">
							Tytuł
						</label>
						<input
							className="input__field"
							id="tytuł"
							type="text"
							placeholder="tytuł tekstu"
							onChange={(e) => setTytuł(e.target.value)}
							value={tytuł}
						/>
					</div>

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

					<div className="input">
						<label className="input__label" htmlFor="tags">
							Dodaj tagi
						</label>
						<input
							className="input__field"
							type="text"
							id="tags"
							onChange={createTags}
						/>
					</div>

					<div className="quill-container">
						<ReactQuill
							className="quill-container__my-editor"
							value={treść}
							onChange={setTreść}
							modules={modules}
							formats={formats}
						/>
					</div>

					<button className="create__btn">Opublikuj</button>
				</form>
			</div>
		</MainContainer>
	);
};

export default CreatePost;
