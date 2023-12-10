import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/scss/components/post-card.scss';
// import pic from '../assets/pic1.jpg';

const PostCard = ({ post, style, imgsize }) => {
	return (
		<article className="post-card" style={style}>
			<Link to={`/posts/${post._id}`}>
				<div className="post-card__wrap">
					<div className="post-card__content">
						<img
							className="info__image"
							src={`http://localhost:8080/images/${post.image}`}
							alt="screenshot"
							style={{ height: `${imgsize}px` }}
						/>
						<div className="info__head">
							<div className="info__meta">
								<p className="info__author">
									{/* <a href="">{!post ? '' : post.author}</a> */}
									{!post ? '' : post.author}
								</p>
								<span className="info__separator"></span>
								{/* <span className="info__date"> */}
								<time
									className="info__date"
									dateTime={
										!post
											? ''
											: new Date(post.createdAt).toLocaleDateString('en-GB')
									}
								>
									{!post
										? ''
										: new Date(post.createdAt).toLocaleDateString('pl-PL', {
												month: 'long',
												year: 'numeric',
												day: 'numeric',
										  })}
								</time>
								{/* </span> */}
							</div>
							<h2 className="info__title">{!post ? '' : post.title}</h2>
							<p className="info__sub">
								{!post ? '' : `${post.lead.substring(1, 100)}...`}
							</p>
						</div>
					</div>
					<div className="info__tags">
						<span className="info__tag">
							<a href="">Film</a>
						</span>
						<span className="info__tag">
							<a href="">Złota palma</a>
						</span>
						<span className="info__tag">
							<a href="">Dramat</a>
						</span>
						<span className="info__tag">
							<a href="">Antonioni</a>
						</span>
					</div>
				</div>
			</Link>
		</article>
	);
};

PostCard.propTypes = {
	post: PropTypes.object,
	style: PropTypes.object,
	imgsize: PropTypes.number,
};

export default PostCard;
