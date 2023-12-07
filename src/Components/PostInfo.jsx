import '../assets/scss/components/post-info.scss';
import PropTypes from 'prop-types';

const PostInfo = ({ color, padding, margin, post }) => {
	return (
		<>
			{/* cały post z obrazkiem tu będzie i w article */}
			<div className="info" style={{ color: color, padding: `${padding}px` }}>
				<div className="info__meta" style={{ marginBottom: `${margin}rem` }}>
					<span className="info__author">
						<a href="">{!post ? '' : post.author}</a>
					</span>
					<span
						className="info__separator"
						style={{ backgroundColor: color }}
					></span>
					<span className="info__date">
						<a href="">
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
						</a>
					</span>
				</div>
				{/* to meta musi byc komponentem, ale to później */}
				<h2 className="info__title" style={{ marginBottom: `${margin}rem` }}>
					{!post ? '' : post.title}
				</h2>
				<p className="info__sub" style={{ marginBottom: `${margin}rem` }}>
					{!post ? '' : `${post.lead.substring(1, 100)}...`}
				</p>
				<div className="info__tags">
					<span className="info__tag" style={{ border: `1px solid ${color}` }}>
						<a href="">Film</a>
					</span>
					<span className="info__tag" style={{ border: `1px solid ${color}` }}>
						<a href="">Złota palma</a>
					</span>
					<span className="info__tag" style={{ border: `1px solid ${color}` }}>
						<a href="">Dramat</a>
					</span>
					<span className="info__tag" style={{ border: `1px solid ${color}` }}>
						<a href="">Antonioni</a>
					</span>
				</div>
			</div>
		</>
	);
};

PostInfo.propTypes = {
	color: PropTypes.string,
	padding: PropTypes.number,
	margin: PropTypes.number,
	post: PropTypes.object,
};

export default PostInfo;
