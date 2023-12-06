import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../Components/MainContainer';
import SecondaryPost from '../Components/SecondaryPost';
import PostInfo from '../Components/PostInfo';
import '../assets/scss/pages/home-page.scss';

const HomePage = () => {
	const [postList, setPostList] = useState([]);

	const getPostList = () => {
		fetch('http://localhost:8080/posts')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setPostList(res.posty.reverse());
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getPostList();
	}, []);

	return (
		<MainContainer>
			<section className="main-post">
				<h1 className="main-post__header">Tytuł całego bloga</h1>
				<p className="main-post__subheader">Podtytuł mojego bloga</p>
				<div className="main-post__view">
					<div className="main-post__list">
						{postList == null
							? ''
							: postList.map((post, index) => {
									if (index == 0) {
										return (
											// brudne rozwiązanie, podwojona klasa - muszę poprawić
											<div key={index} className="main-post__picture">
												<Link key={index} to={`posts/${post._id}`}>
													<div
														className="main-post__picture"
														style={{
															backgroundImage: `url("http://localhost:8080/images/${post.image}")`,
														}}
													>
														<PostInfo
															color={'rgb(236, 233, 233)'}
															padding={30}
															margin={1}
															post={post}
														/>
													</div>
												</Link>
											</div>
										);
									}
									return <SecondaryPost key={post._id} post={post} />;
							  })}
					</div>
				</div>
			</section>
		</MainContainer>
	);
};

export default HomePage;
