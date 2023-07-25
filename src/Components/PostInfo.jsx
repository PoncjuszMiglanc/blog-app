import "./post-info.scss";
import PropTypes from "prop-types";

const PostInfo = ({ color, padding, margin }) => {
  return (
    <>
      <div className="info" style={{ color: color, padding: `${padding}px` }}>
        <div className="info__meta" style={{ marginBottom: `${margin}rem` }}>
          <span className="info__author">
            <a href="">Jan Kowalski</a>
          </span>
          <span
            className="info__separator"
            style={{ backgroundColor: color }}
          ></span>
          <span className="info__date">
            <a href="">
              <time dateTime="25.07.2023">27 Lipca 2023</time>
            </a>
          </span>
        </div>

        <h2 className="info__title" style={{ marginBottom: `${margin}rem` }}>
          Tytuł wpisu blogowego
        </h2>
        <p className="info__sub" style={{ marginBottom: `${margin}rem` }}>
          Podtytuł wpisu blogowego, żeby wszyscy mogli przeczytać o czym jest
          ten post
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
};

export default PostInfo;
