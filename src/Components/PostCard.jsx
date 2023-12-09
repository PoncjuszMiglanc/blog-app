import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/scss/components/post-card.scss';
import pic from '../assets/pic1.jpg';

const PostCard = ({ post, style }) => {
	return (
		<article className="post-card" style={style}>
			<Link to={`/posts/${post._id}`}>
				<div className="post-card__wrap">
					<div className="post-card__content">
						<img className="info__image" src={pic} alt="screenshot" />
						<div className="info__head">
							<div className="info__meta">
								<span className="info__author">
									<a href="">{!post ? '' : post.author}</a>
								</span>
								<span className="info__separator"></span>
								<span className="info__date">
									<time
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
								</span>
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
};

export default PostCard;
