import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainContainer from '../Components/MainContainer';
import '../assets/scss/pages/blog-post.scss';

const BlogPost = () => {
	//możliwe, ze zamiast background image to powinny być osobno image, skoro pełnią rolę osobnego obrazka a nie tła
	const { id } = useParams();
	const [post, setPost] = useState(null);

	const getPost = () => {
		fetch(`http://localhost:8080/posts/${id}`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setPost(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getPost();
	}, []);

	return (
		<>
			<MainContainer>
				<div className="blog-post">
					<div className="blog-post__head">
						<p className="blog-post__category">
							{!post ? '' : post.post.category}
						</p>
						<h1 className="blog-post__title">{!post ? '' : post.post.title}</h1>
						{/* <button onClick={() => console.log(post.post.image)}>POST</button>
            <button onClick={() => console.log(id)}>PARAMS</button> */}
						<div className="blog-post__meta">
							<span className="blog-post__author">
								<a href="">{!post ? '' : post.post.author}</a>
							</span>
							<span className="blog-post__separator"></span>
							<span className="blog-post__date">
								<a href="">
									<time
										dateTime={
											!post
												? ''
												: new Date(post.post.createdAt).toLocaleDateString(
														'en-GB'
												  )
										}
									>
										{!post
											? ''
											: new Date(post.post.createdAt).toLocaleDateString(
													'pl-PL',
													{
														month: 'long',
														year: 'numeric',
														day: 'numeric',
													}
											  )}
									</time>
								</a>
							</span>
						</div>
					</div>
					{!post ? (
						''
					) : (
						<div
							className="blog-post__img"
							style={{
								backgroundImage: `url("http://localhost:8080/images/${post.post.image}")`,
							}}
						></div>
					)}
					{/* {!post ? (
            <p>Nie ma posta</p>
          ) : (
            <img src={`http://localhost:8080/images/${post.post.image}`} />
          )} */}
					<div className="blog-post__content">
						<div className="blog-post__lead">
							<p>
								<strong>{!post ? '' : post.post.content}</strong>
							</p>
						</div>
						<div className="blog-post__divider">***</div>
						<div className="blog-post__text">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
								quis veritatis asperiores, adipisci unde perspiciatis sed
								debitis ratione vero distinctio harum a nam natus facere illo
								corporis! Ipsam, deleniti? Nulla.
							</p>
							<br />

							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Officia quia, earum error doloremque veritatis labore, nesciunt
								delectus quod totam facere numquam harum quam aliquam distinctio
								fuga facilis fugit magnam vero doloribus accusantium nostrum
								rem, deleniti tenetur! Vel, quos, assumenda provident,
								dignissimos incidunt ab impedit accusantium id veritatis aliquam
								numquam in!
							</p>
							<ul>
								<li>sdasd</li>
								<li>asdas</li>
								<li>asdasd</li>
								<li>asdsd</li>
								<li>asdasd</li>
							</ul>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
								vero repellat voluptates, odio, nobis quasi sint ut veritatis
								iste dolore assumenda officia similique totam repellendus odit
								pariatur deleniti cum natus facilis. Perferendis, architecto
								asperiores doloremque nisi necessitatibus cumque autem ipsam
								molestiae. Officia sed quas necessitatibus adipisci laudantium
								illum maxime veritatis fugiat, laborum voluptas impedit
								obcaecati blanditiis ut laboriosam inventore praesentium!
							</p>
						</div>
					</div>
				</div>
			</MainContainer>
		</>
	);
};

export default BlogPost;
